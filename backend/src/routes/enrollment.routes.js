const express = require('express');
const { enrollInCourse, getMyEnrollments } = require('../controllers/enrollment.controller');

const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/me', protect, getMyEnrollments);
router.post('/courses/:courseId/enroll', protect, enrollInCourse);

module.exports = router;