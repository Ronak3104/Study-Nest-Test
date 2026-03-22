const express = require('express');
const { markAttendance, getMyAttendanceByCourse } = require('../controllers/attendance.controller');

const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/mark', protect, markAttendance);
router.get('/course/:courseId/me', protect, getMyAttendanceByCourse);

module.exports = router;