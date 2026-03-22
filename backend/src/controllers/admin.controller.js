const User = require('../models/user.model');
const Course = require('../models/Course.model');
const Certificate = require('../models/Certificate.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const getAdminDashboardData = asyncHandler(async (req, res) => {
  const [users, courses, certificates] = await Promise.all([
    User.find().select('-password').sort({ createdAt: -1 }).limit(10),
    Course.find().populate('instructor', 'name email').sort({ createdAt: -1 }).limit(10),
    Certificate.find()
      .populate('userId', 'name email')
      .populate('courseId', 'title')
      .sort({ createdAt: -1 })
      .limit(10)
  ]);

  res.status(200).json(
    new ApiResponse(200, 'Admin dashboard data fetched successfully', {
      recentUsers: users,
      recentCourses: courses,
      recentCertificates: certificates
    })
  );
});

const toggleUserStatus = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  user.isActive = !user.isActive;
  await user.save();

  res.status(200).json(new ApiResponse(200, 'User status updated successfully', user));
});

module.exports = {
  getAdminDashboardData,
  toggleUserStatus
};