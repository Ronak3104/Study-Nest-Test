const Result = require('../models/Result.model');
const Submission = require('../models/Submission.model');
const QuizAttempt = require('../models/QuizAttempt.model');
const Quiz = require('../models/Quiz.model');
const Assignment = require('../models/Assignment.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const getMyCourseResult = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const assignments = await Assignment.find({ courseId }).select('_id');
  const quizzes = await Quiz.find({ courseId }).select('_id');

  const assignmentIds = assignments.map((a) => a._id);
  const quizIds = quizzes.map((q) => q._id);

  const submissions = await Submission.find({
    userId: req.user._id,
    assignmentId: { $in: assignmentIds }
  });

  const attempts = await QuizAttempt.find({
    userId: req.user._id,
    quizId: { $in: quizIds }
  });

  const assignmentScore = submissions.reduce((sum, item) => sum + (item.marks || 0), 0);
  const quizScore = attempts.reduce((sum, item) => sum + (item.score || 0), 0);
  const totalScore = assignmentScore + quizScore;

  const result = await Result.findOneAndUpdate(
    { userId: req.user._id, courseId },
    { assignmentScore, quizScore, totalScore },
    { upsert: true, new: true }
  );

  res.status(200).json(new ApiResponse(200, 'Result fetched successfully', result));
});

module.exports = {
  getMyCourseResult
};