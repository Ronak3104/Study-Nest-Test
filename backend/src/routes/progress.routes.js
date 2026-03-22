const express = require('express');
const { getMyProgressByCourse, markAssignmentCompleted } = require('../controllers/progress.controller');

const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/course/:courseId/me', protect, getMyProgressByCourse);
router.patch('/course/:courseId/assignment/:assignmentId/complete', protect, markAssignmentCompleted);

module.exports = router;