const User = require('../models/user.model');
const Course = require('../models/Course.model');
const Enrollment = require('../models/Enrollment.model');
const Certificate = require('../models/Certificate.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const getOverview = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalStudents = await User.countDocuments({ role: 'student' });
  const totalInstructors = await User.countDocuments({ role: 'instructor' });
  const totalAdmins = await User.countDocuments({ role: 'admin' });
  const totalCourses = await Course.countDocuments();
  const totalEnrollments = await Enrollment.countDocuments();
  const totalCertificatesIssued = await Certificate.countDocuments();

  res.status(200).json(
    new ApiResponse(200, 'Analytics overview fetched successfully', {
      totalUsers,
      totalStudents,
      totalInstructors,
      totalAdmins,
      totalCourses,
      totalEnrollments,
      totalCertificatesIssued
    })
  );
});

const getDemographics = asyncHandler(async (req, res) => {
  const genderDistribution = await User.aggregate([
    { $group: { _id: '$gender', count: { $sum: 1 } } }
  ]);

  const roleDistribution = await User.aggregate([
    { $group: { _id: '$role', count: { $sum: 1 } } }
  ]);

  const countryDistribution = await User.aggregate([
    { $match: { country: { $ne: '' } } },
    { $group: { _id: '$country', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);

  res.status(200).json(
    new ApiResponse(200, 'Demographics fetched successfully', {
      genderDistribution,
      roleDistribution,
      countryDistribution
    })
  );
});

module.exports = {
  getOverview,
  getDemographics
};