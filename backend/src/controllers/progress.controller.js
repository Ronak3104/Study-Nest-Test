const Progress = require('../models/Progress.model');
const Lesson = require('../models/Lesson.model');
const Assignment = require('../models/Assignment.model');
const Quiz = require('../models/Quiz.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const calculatePercentage = async ({ courseId, progress }) => {
  const totalLessons = await Lesson.countDocuments({ courseId });
  const totalAssignments = await Assignment.countDocuments({ courseId });
  const totalQuizzes = await Quiz.countDocuments({ courseId });

  const totalItems = totalLessons + totalAssignments + totalQuizzes;
  if (totalItems === 0) return 0;

  const completed =
    (progress.completedLessons?.length || 0) +
    (progress.completedAssignments?.length || 0) +
    (progress.completedQuizzes?.length || 0);

  return Math.min(100, Math.round((completed / totalItems) * 100));
};

const getMyProgressByCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const progress = await Progress.findOne({
    userId: req.user._id,
    courseId
  });

  if (!progress) {
    throw new ApiError(404, 'Progress not found');
  }

  const percentage = await calculatePercentage({ courseId, progress });

  progress.percentage = percentage;
  await progress.save();

  res.status(200).json(new ApiResponse(200, 'Progress fetched successfully', progress));
});

const markAssignmentCompleted = asyncHandler(async (req, res) => {
  const { courseId, assignmentId } = req.params;

  let progress = await Progress.findOne({ userId: req.user._id, courseId });
  if (!progress) {
    progress = await Progress.create({ userId: req.user._id, courseId });
  }

  if (!progress.completedAssignments.includes(assignmentId)) {
    progress.completedAssignments.push(assignmentId);
  }

  progress.percentage = await calculatePercentage({ courseId, progress });
  await progress.save();

  res.status(200).json(new ApiResponse(200, 'Assignment marked completed', progress));
});

module.exports = {
  getMyProgressByCourse,
  markAssignmentCompleted
};