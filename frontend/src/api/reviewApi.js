import axiosInstance from "./axiosInstance";

export const addReview = (data) => axiosInstance.post("/reviews", data);
export const getCourseReviews = (courseId) =>
  axiosInstance.get(`/reviews/course/${courseId}`);
