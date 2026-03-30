const express = require("express");
const router = express.Router();
const {
  createReview,
  fetchReviews,
} = require("../controllers/review.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, createReview);
router.get("/course/:courseId", fetchReviews);

module.exports = router;
