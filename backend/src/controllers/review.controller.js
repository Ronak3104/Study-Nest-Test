const { addReview, getCourseReviews } = require("../services/review.service");

const createReview = async (req, res) => {
  try {
    const review = await addReview(req.user.id, req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const fetchReviews = async (req, res) => {
  try {
    const reviews = await getCourseReviews(req.params.courseId);
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createReview, fetchReviews };
