const Result = require('../models/Result.model');
const Submission = require('../models/Submission.model');
const QuizAttempt = require('../models/QuizAttempt.model');
const Quiz = require('../models/Quiz.model');
const Assignment = require('../models/Assignment.model');

const computeMyCourseResult = async ({ userId, courseId }) => {
  const assignments = await Assignment.find({ courseId }).select('_id');
  const quizzes = await Quiz.find({ courseId }).select('_id');

  const assignmentIds = assignments.map((a) => a._id);
  const quizIds = quizzes.map((q) => q._id);

  const submissions = await Submission.find({ userId, assignmentId: { $in: assignmentIds } });
  const attempts = await QuizAttempt.find({ userId, quizId: { $in: quizIds } });

  const assignmentScore = submissions.reduce((sum, x) => sum + (x.marks || 0), 0);
  const quizScore = attempts.reduce((sum, x) => sum + (x.score || 0), 0);
  const totalScore = assignmentScore + quizScore;

  const result = await Result.findOneAndUpdate(
    { userId, courseId },
    { assignmentScore, quizScore, totalScore },
    { upsert: true, new: true }
  );

  return result;
};

module.exports = { computeMyCourseResult };