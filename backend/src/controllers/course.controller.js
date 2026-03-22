const Course = require('../models/Course.model');
const Lesson = require('../models/Lesson.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const createCourse = asyncHandler(async (req, res) => {
  const course = await Course.create({
    ...req.body,
    instructor: req.user._id
  });

  res.status(201).json(new ApiResponse(201, 'Course created successfully', course));
});

const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find()
    .populate('instructor', 'name email')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'Courses fetched successfully', courses));
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.courseId).populate('instructor', 'name email');
  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  const lessons = await Lesson.find({ courseId: course._id }).sort({ order: 1 });

  res.status(200).json(
    new ApiResponse(200, 'Course fetched successfully', {
      course,
      lessons
    })
  );
});

const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
    new: true,
    runValidators: true
  });

  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  res.status(200).json(new ApiResponse(200, 'Course updated successfully', course));
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.courseId);

  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  await Lesson.deleteMany({ courseId: req.params.courseId });

  res.status(200).json(new ApiResponse(200, 'Course deleted successfully'));
});

const addLesson = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, 'Course not found');
  }

  const lesson = await Lesson.create({
    courseId,
    ...req.body
  });

  res.status(201).json(new ApiResponse(201, 'Lesson added successfully', lesson));
});

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addLesson
};