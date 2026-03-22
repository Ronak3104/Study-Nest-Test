import axiosInstance from './axiosInstance';

export const addReview = async (payload) => {
  const { data } = await axiosInstance.post('/reviews', payload);
  return data;
};

export const getCourseReviews = async (courseId) => {
  const { data } = await axiosInstance.get(`/reviews/course/${courseId}`);
  return data;
};