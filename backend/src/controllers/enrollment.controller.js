const Enrollment = require('../models/Enrollment.model');
const Course = require('../models/Course.model');
const User = require('../models/user.model');
const Progress = require('../models/Progress.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const enrollInCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  const existing = await Enrollment.findOne({ userId: req.user._id, courseId });
  if (existing) {
    throw new ApiError(400, 'Already enrolled in this course');
  }

  const enrollment = await Enrollment.create({
    userId: req.user._id,
    courseId,
    paymentStatus: course.price > 0 ? 'pending' : 'free',
    completionStatus: 'not_started'
  });

  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { enrolledCourses: courseId }
  });

  await Progress.create({
    userId: req.user._id,
    courseId
  });

  await Course.findByIdAndUpdate(courseId, {
    $inc: { totalEnrollments: 1 }
  });

  res.status(201).json(new ApiResponse(201, 'Enrolled successfully', enrollment));
});

const getMyEnrollments = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({ userId: req.user._id })
    .populate('courseId')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'Enrollments fetched successfully', enrollments));
});

module.exports = {
  enrollInCourse,
  getMyEnrollments
};