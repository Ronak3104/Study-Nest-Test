const Certificate = require('../models/Certificate.model');
const Course = require('../models/Course.model');
const Progress = require('../models/Progress.model');
const User = require('../models/user.model');
const axios = require('axios');
const env = require('../config/env');
const { formatCertificatePayload } = require('../utils/certificatePayload');

const generateAndIssue = async (userId, courseId) => {
  const progress = await Progress.findOne({ userId, courseId });

  if (!progress || progress.percentage < 100) {
    throw new Error('Course not completed');
  }

  let existingCertificate = await Certificate.findOne({ userId, courseId });
  if (existingCertificate) {
    return existingCertificate;
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const course = await Course.findById(courseId).populate('instructor', 'name');
  if (!course) {
    throw new Error('Course not found');
  }

  const certificateNumber = `SN-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 7)
    .toUpperCase()}`;

  let certificateUrl = '';

  try {
    const payload = formatCertificatePayload(
      user,
      course,
      certificateNumber,
      new Date()
    );

    const response = await axios.post(
      `${env.certificateServiceUrl}/generate`,
      payload
    );

    certificateUrl = response.data?.url || '';
  } catch (error) {
    console.error('Python certificate service failed:', error.message);
  }

  const certificate = await Certificate.create({
    userId,
    courseId,
    certificateNumber,
    certificateUrl,
    status: 'issued'
  });

  return certificate;
};

const getUserCertificates = async (userId) => {
  return Certificate.find({ userId })
    .populate('courseId', 'title slug')
    .sort({ createdAt: -1 });
};

const getAllCertificates = async () => {
  return Certificate.find()
    .populate('userId', 'name email')
    .populate('courseId', 'title')
    .sort({ createdAt: -1 });
};

module.exports = {
  generateAndIssue,
  getUserCertificates,
  getAllCertificates
};