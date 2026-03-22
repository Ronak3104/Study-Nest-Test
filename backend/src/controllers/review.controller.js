const Review = require('../models/Review.model');
const Course = require('../models/Course.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const recalculateCourseRating = async (courseId) => {
  const reviews = await Review.find({ courseId });
  if (!reviews.length) {
    await Course.findByIdAndUpdate(courseId, { averageRating: 0 });
    return;
  }

  const avg =
    reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;

  await Course.findByIdAndUpdate(courseId, { averageRating: Number(avg.toFixed(1)) });
};

const addReview = asyncHandler(async (req, res) => {
  const { courseId, rating, comment } = req.body;

  const review = await Review.findOneAndUpdate(
    {
      userId: req.user._id,
      courseId
    },
    {
      rating,
      comment
    },
    {
      new: true,
      upsert: true,
      runValidators: true
    }
  );

  await recalculateCourseRating(courseId);

  res.status(201).json(new ApiResponse(201, 'Review saved successfully', review));
});

const getCourseReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ courseId: req.params.courseId })
    .populate('userId', 'name profileImage')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'Reviews fetched successfully', reviews));
});

module.exports = {
  addReview,
  getCourseReviews
};