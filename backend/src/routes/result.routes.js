const express = require('express');
const { getMyCourseResult } = require('../controllers/result.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/course/:courseId/me', protect, getMyCourseResult);

module.exports = router;