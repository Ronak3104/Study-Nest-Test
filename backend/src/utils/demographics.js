const User = require("../models/User.model");
const Course = require("../models/Course.model");

const getTotalUsers = async () => await User.countDocuments();
const getTotalCourses = async () => await Course.countDocuments();

const getDemographicStats = async () => {
  const roleCount = await User.aggregate([
    { $group: { _id: "$role", count: { $sum: 1 } } },
  ]);
  return { roleDistribution: roleCount };
};

module.exports = { getTotalUsers, getTotalCourses, getDemographicStats };
