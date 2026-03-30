const Enrollment = require("../models/Enrollment.model");
const ApiError = require("../utils/ApiError");

const enrollStudent = async (userId, courseId) => {
  const existing = await Enrollment.findOne({ user: userId, course: courseId });
  if (existing) throw new ApiError(400, "Already enrolled");
  return await Enrollment.create({ user: userId, course: courseId });
};

const getEnrollments = async (userId) => {
  return await Enrollment.find({ user: userId }).populate(
    "course",
    "title price",
  );
};

module.exports = { enrollStudent, getEnrollments };
