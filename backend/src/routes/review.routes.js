const express = require('express');
const { addReview, getCourseReviews } = require('../controllers/review.controller');

const { protect } = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { addReviewSchema } = require('../validations/review.validation');

const router = express.Router();

router.get('/course/:courseId', getCourseReviews);
router.post('/', protect, validate(addReviewSchema), addReview);

module.exports = router;