const Course = require('../models/Course.model');
const Lesson = require('../models/Lesson.model');
const ApiError = require('../utils/ApiError');

const createCourse = async (data) => Course.create(data);

const listCourses = async () =>
  Course.find().populate('instructor', 'name email').sort({ createdAt: -1 });

const getCourse = async (courseId) => {
  const course = await Course.findById(courseId).populate('instructor', 'name email');
  if (!course) throw new ApiError(404, 'Course not found');

  const lessons = await Lesson.find({ courseId }).sort({ order: 1 });
  return { course, lessons };
};

const updateCourse = async (courseId, data) => {
  const course = await Course.findByIdAndUpdate(courseId, data, { new: true, runValidators: true });
  if (!course) throw new ApiError(404, 'Course not found');
  return course;
};

const deleteCourse = async (courseId) => {
  const course = await Course.findByIdAndDelete(courseId);
  if (!course) throw new ApiError(404, 'Course not found');
  await Lesson.deleteMany({ courseId });
  return true;
};

const addLesson = async (courseId, data) => {
  const course = await Course.findById(courseId);
  if (!course) throw new ApiError(404, 'Course not found');
  return Lesson.create({ courseId, ...data });
};

module.exports = { createCourse, listCourses, getCourse, updateCourse, deleteCourse, addLesson };