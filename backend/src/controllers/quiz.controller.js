const {
  createQuiz,
  getQuizzesForCourse,
  submitQuizAttempt,
} = require("../services/quiz.service");

const addQuiz = async (req, res) => {
  try {
    const quiz = await createQuiz(req.body, req.user.id);
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getCourseQuizzes = async (req, res) => {
  try {
    const quizzes = await getQuizzesForCourse(req.params.courseId);
    res.json({ success: true, data: quizzes });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const attemptQuiz = async (req, res) => {
  try {
    const result = await submitQuizAttempt(
      req.user.id,
      req.params.quizId,
      req.body.answers,
    );
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { addQuiz, getCourseQuizzes, attemptQuiz };
