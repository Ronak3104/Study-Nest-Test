import axiosInstance from "./axiosInstance";

export const getCourseQuizzes = (courseId) =>
  axiosInstance.get(`/quizzes/course/${courseId}`);

export const createQuiz = (data) =>
  axiosInstance.post("/quizzes", data);

export const attemptQuiz = (quizId, answers) =>
  axiosInstance.post(`/quizzes/${quizId}/attempt`, { answers });
