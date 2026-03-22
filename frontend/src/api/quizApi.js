import axiosInstance from './axiosInstance';

export const createQuiz = async (payload) => {
  const { data } = await axiosInstance.post('/quizzes', payload);
  return data;
};

export const getQuizzesByCourse = async (courseId) => {
  const { data } = await axiosInstance.get(`/quizzes/course/${courseId}`);
  return data;
};

export const attemptQuiz = async (quizId, payload) => {
  const { data } = await axiosInstance.post(`/quizzes/${quizId}/attempt`, payload);
  return data;
};

export const getCourseResult = async (courseId) => {
  const { data } = await axiosInstance.get(`/results/course/${courseId}`);
  return data;
};