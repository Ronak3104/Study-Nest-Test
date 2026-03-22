const Quiz = require('../models/Quiz.model');
const QuizAttempt = require('../models/QuizAttempt.model');
const Progress = require('../models/Progress.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const createQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(new ApiResponse(201, 'Quiz created successfully', quiz));
});

const getQuizzesByCourse = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find({ courseId: req.params.courseId });
  res.status(200).json(new ApiResponse(200, 'Quizzes fetched successfully', quizzes));
});

const attemptQuiz = asyncHandler(async (req, res) => {
  const { quizId } = req.params;
  const { answers } = req.body;

  const quiz = await Quiz.findById(quizId);
  if (!quiz) {
    throw new ApiError(404, 'Quiz not found');
  }

  let score = 0;

  quiz.questions.forEach((q, index) => {
    const ans = answers.find((a) => a.questionIndex === index);
    if (ans && ans.selectedAnswerIndex === q.correctAnswerIndex) {
      score += 1;
    }
  });

  const attempt = await QuizAttempt.create({
    quizId,
    userId: req.user._id,
    answers,
    score
  });

  await Progress.findOneAndUpdate(
    { userId: req.user._id, courseId: quiz.courseId },
    { $addToSet: { completedQuizzes: quiz._id } },
    { new: true }
  );

  res.status(201).json(new ApiResponse(201, 'Quiz attempted successfully', attempt));
});

module.exports = {
  createQuiz,
  getQuizzesByCourse,
  attemptQuiz
};