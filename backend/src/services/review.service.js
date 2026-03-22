const Review = require('../models/Review.model');
const Course = require('../models/Course.model');

const recalc = async (courseId) => {
  const reviews = await Review.find({ courseId });
  if (!reviews.length) {
    await Course.findByIdAndUpdate(courseId, { averageRating: 0 });
    return;
  }
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  await Course.findByIdAndUpdate(courseId, { averageRating: Number(avg.toFixed(1)) });
};

const upsertReview = async ({ userId, courseId, rating, comment }) => {
  const review = await Review.findOneAndUpdate(
    { userId, courseId },
    { rating, comment },
    { new: true, upsert: true, runValidators: true }
  );
  await recalc(courseId);
  return review;
};

const listCourseReviews = async (courseId) =>
  Review.find({ courseId }).populate('userId', 'name profileImage').sort({ createdAt: -1 });

module.exports = { upsertReview, listCourseReviews };