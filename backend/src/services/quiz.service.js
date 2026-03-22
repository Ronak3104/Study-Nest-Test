const Quiz = require('../models/Quiz.model');
const QuizAttempt = require('../models/QuizAttempt.model');
const Progress = require('../models/Progress.model');
const ApiError = require('../utils/ApiError');

const createQuiz = async (data) => Quiz.create(data);

const listByCourse = async (courseId) => Quiz.find({ courseId });

const attempt = async ({ quizId, userId, answers }) => {
  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new ApiError(404, 'Quiz not found');

  let score = 0;
  quiz.questions.forEach((q, index) => {
    const ans = answers.find((a) => a.questionIndex === index);
    if (ans && ans.selectedAnswerIndex === q.correctAnswerIndex) score += 1;
  });

  const attemptDoc = await QuizAttempt.create({ quizId, userId, answers, score });

  await Progress.findOneAndUpdate(
    { userId, courseId: quiz.courseId },
    { $addToSet: { completedQuizzes: quiz._id } },
    { new: true }
  );

  return attemptDoc;
};

module.exports = { createQuiz, listByCourse, attempt };