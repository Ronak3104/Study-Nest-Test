const express = require('express');
const { submitAssignment, getMySubmissions } = require('../controllers/submission.controller');

const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/me', protect, getMySubmissions);
router.post('/assignments/:assignmentId/submit', protect, submitAssignment);

module.exports = router;