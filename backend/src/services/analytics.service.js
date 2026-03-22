const User = require('../models/user.model');
const Course = require('../models/Course.model');
const Enrollment = require('../models/Enrollment.model');
const Certificate = require('../models/Certificate.model');

const overview = async () => {
  const [totalUsers, totalStudents, totalInstructors, totalAdmins, totalCourses, totalEnrollments, totalCertificatesIssued] =
    await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: 'student' }),
      User.countDocuments({ role: 'instructor' }),
      User.countDocuments({ role: 'admin' }),
      Course.countDocuments(),
      Enrollment.countDocuments(),
      Certificate.countDocuments()
    ]);

  return {
    totalUsers,
    totalStudents,
    totalInstructors,
    totalAdmins,
    totalCourses,
    totalEnrollments,
    totalCertificatesIssued
  };
};

const demographics = async () => {
  const genderDistribution = await User.aggregate([{ $group: { _id: '$gender', count: { $sum: 1 } } }]);
  const roleDistribution = await User.aggregate([{ $group: { _id: '$role', count: { $sum: 1 } } }]);

  const countryDistribution = await User.aggregate([
    { $match: { country: { $ne: '' } } },
    { $group: { _id: '$country', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);

  return { genderDistribution, roleDistribution, countryDistribution };
};

module.exports = { overview, demographics };