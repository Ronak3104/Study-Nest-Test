const Enrollment = require('../models/Enrollment.model');
const Course = require('../models/Course.model');
const User = require('../models/user.model');
const Progress = require('../models/Progress.model');
const ApiError = require('../utils/ApiError');

const enroll = async ({ userId, courseId }) => {
  const course = await Course.findById(courseId);
  if (!course) throw new ApiError(404, 'Course not found');

  const exists = await Enrollment.findOne({ userId, courseId });
  if (exists) throw new ApiError(400, 'Already enrolled in this course');

  const enrollment = await Enrollment.create({
    userId,
    courseId,
    paymentStatus: course.price > 0 ? 'pending' : 'free',
    completionStatus: 'not_started'
  });

  await User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } });
  await Progress.create({ userId, courseId });
  await Course.findByIdAndUpdate(courseId, { $inc: { totalEnrollments: 1 } });

  return enrollment;
};

const myEnrollments = async (userId) => {
  return Enrollment.find({ userId }).populate('courseId').sort({ createdAt: -1 });
};

module.exports = { enroll, myEnrollments };