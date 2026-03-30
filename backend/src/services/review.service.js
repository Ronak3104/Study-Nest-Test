const Review = require("../models/Review.model");

const addReview = async (userId, data) => {
  return await Review.create({ user: userId, ...data });
};

const getCourseReviews = async (courseId) => {
  return await Review.find({ course: courseId }).populate("user", "name");
};

module.exports = { addReview, getCourseReviews };
