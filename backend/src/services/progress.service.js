const Progress = require('../models/Progress.model');
const Lesson = require('../models/Lesson.model');
const Assignment = require('../models/Assignment.model');
const Quiz = require('../models/Quiz.model');
const ApiError = require('../utils/ApiError');

const calcPercentage = async ({ courseId, progress }) => {
  const [totalLessons, totalAssignments, totalQuizzes] = await Promise.all([
    Lesson.countDocuments({ courseId }),
    Assignment.countDocuments({ courseId }),
    Quiz.countDocuments({ courseId })
  ]);

  const total = totalLessons + totalAssignments + totalQuizzes;
  if (total === 0) return 0;

  const done =
    (progress.completedLessons?.length || 0) +
    (progress.completedAssignments?.length || 0) +
    (progress.completedQuizzes?.length || 0);

  return Math.min(100, Math.round((done / total) * 100));
};

const getMyProgress = async ({ userId, courseId }) => {
  const progress = await Progress.findOne({ userId, courseId });
  if (!progress) throw new ApiError(404, 'Progress not found');

  progress.percentage = await calcPercentage({ courseId, progress });
  await progress.save();
  return progress;
};

const markAssignmentComplete = async ({ userId, courseId, assignmentId }) => {
  let progress = await Progress.findOne({ userId, courseId });
  if (!progress) progress = await Progress.create({ userId, courseId });

  if (!progress.completedAssignments.includes(assignmentId)) {
    progress.completedAssignments.push(assignmentId);
  }

  progress.percentage = await calcPercentage({ courseId, progress });
  await progress.save();
  return progress;
};

module.exports = { getMyProgress, markAssignmentComplete };