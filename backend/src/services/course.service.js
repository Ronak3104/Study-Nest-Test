const Course = require("../models/Course.model");
const ApiError = require("../utils/ApiError");

const createCourse = async (courseData, instructorId) => {
  courseData.instructor = instructorId;
  return await Course.create(courseData);
};

const getAllCourses = async (query = {}) => {
  const { page = 1, limit = 10, search } = query;
  const filter = search ? { title: { $regex: search, $options: "i" } } : {};
  return await Course.find(filter)
    .populate("instructor", "name")
    .limit(limit * 1)
    .skip((page - 1) * limit);
};

const getCourseById = async (id) => {
  const course = await Course.findById(id)
    .populate("instructor", "name")
    .populate("lessons");
  if (!course) throw new ApiError(404, "Course not found");
  return course;
};

const updateCourse = async (id, updateData) => {
  const course = await Course.findByIdAndUpdate(id, updateData, { new: true });
  if (!course) throw new ApiError(404, "Course not found");
  return course;
};

const deleteCourse = async (id) => {
  const course = await Course.findByIdAndDelete(id);
  if (!course) throw new ApiError(404, "Course not found");
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
