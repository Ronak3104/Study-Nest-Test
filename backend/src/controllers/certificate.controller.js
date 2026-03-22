const Certificate = require('../models/Certificate.model');
const Course = require('../models/Course.model');
const Progress = require('../models/Progress.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const generateCertificateNumber = () => {
  return `SN-${Date.now()}`;
};

const issueCertificate = asyncHandler(async (req, res) => {
  const { courseId, certificateUrl } = req.body;

  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  const progress = await Progress.findOne({ userId: req.user._id, courseId });
  if (!progress || progress.percentage < 100) {
    throw new ApiError(400, 'Course not yet completed');
  }

  let certificate = await Certificate.findOne({
    userId: req.user._id,
    courseId
  });

  if (certificate) {
    return res
      .status(200)
      .json(new ApiResponse(200, 'Certificate already issued', certificate));
  }

  certificate = await Certificate.create({
    userId: req.user._id,
    courseId,
    certificateNumber: generateCertificateNumber(),
    certificateUrl: certificateUrl || ''
  });

  res.status(201).json(new ApiResponse(201, 'Certificate issued successfully', certificate));
});

const getMyCertificates = asyncHandler(async (req, res) => {
  const certificates = await Certificate.find({ userId: req.user._id })
    .populate('courseId', 'title slug')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'Certificates fetched successfully', certificates));
});

const getAllCertificates = asyncHandler(async (req, res) => {
  const certificates = await Certificate.find()
    .populate('userId', 'name email')
    .populate('courseId', 'title')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'All certificates fetched successfully', certificates));
});

module.exports = {
  issueCertificate,
  getMyCertificates,
  getAllCertificates
};