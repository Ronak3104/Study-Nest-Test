const Quiz = require("../models/Quiz.model");
const QuizAttempt = require("../models/QuizAttempt.model");
const Result = require("../models/Result.model");

const createQuiz = async (data, instructorId) => {
  return await Quiz.create(data);
};

const getQuizzesForCourse = async (courseId) => {
  return await Quiz.find({ course: courseId });
};

const submitQuizAttempt = async (studentId, quizId, answers) => {
  const quiz = await Quiz.findById(quizId);
  // Simple scoring logic
  let score = 0;
  answers.forEach((ans, i) => {
    if (ans === quiz.questions[i].correctAnswer) score++;
  });
  const attempt = await QuizAttempt.create({
    quiz: quizId,
    student: studentId,
    answers,
    score,
  });
  await Result.create({
    user: studentId,
    type: "quiz",
    referenceId: quizId,
    score,
    total: quiz.questions.length,
  });
  return attempt;
};

module.exports = { createQuiz, getQuizzesForCourse, submitQuizAttempt };
