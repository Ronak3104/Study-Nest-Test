import axiosInstance from './axiosInstance';

export const getAllCourses = async () => {
  const { data } = await axiosInstance.get('/courses');
  return data;
};

export const getCourseById = async (courseId) => {
  const { data } = await axiosInstance.get(`/courses/${courseId}`);
  return data;
};

export const createCourse = async (payload) => {
  const { data } = await axiosInstance.post('/courses', payload);
  return data;
};

export const updateCourse = async (courseId, payload) => {
  const { data } = await axiosInstance.patch(`/courses/${courseId}`, payload);
  return data;
};

export const deleteCourse = async (courseId) => {
  const { data } = await axiosInstance.delete(`/courses/${courseId}`);
  return data;
};

export const addLesson = async (courseId, payload) => {
  const { data } = await axiosInstance.post(`/courses/${courseId}/lessons`, payload);
  return data;
};