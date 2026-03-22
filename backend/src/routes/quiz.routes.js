const express = require('express');
const { createQuiz, getQuizzesByCourse, attemptQuiz } = require('../controllers/quiz.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { createQuizSchema, attemptQuizSchema } = require('../validations/quiz.validation');

const router = express.Router();

router.post('/', protect, allowRoles('instructor', 'admin'), validate(createQuizSchema), createQuiz);
router.get('/course/:courseId', protect, getQuizzesByCourse);
router.post('/:quizId/attempt', protect, validate(attemptQuizSchema), attemptQuiz);

module.exports = router;