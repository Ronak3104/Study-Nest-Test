const express = require("express");
const router = express.Router();
const {
  addQuiz,
  getCourseQuizzes,
  attemptQuiz,
} = require("../controllers/quiz.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.post("/", auth, hasRole("teacher", "admin"), addQuiz);
router.get("/course/:courseId", auth, getCourseQuizzes);
router.post("/:quizId/attempt", auth, attemptQuiz);

module.exports = router;
