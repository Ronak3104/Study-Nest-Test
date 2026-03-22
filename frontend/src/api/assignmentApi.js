import axiosInstance from './axiosInstance';

export const createAssignment = async (payload) => {
  const { data } = await axiosInstance.post('/assignments', payload);
  return data;
};

export const getAssignmentsByCourse = async (courseId) => {
  const { data } = await axiosInstance.get(`/assignments/course/${courseId}`);
  return data;
};

export const getAssignmentById = async (assignmentId) => {
  const { data } = await axiosInstance.get(`/assignments/${assignmentId}`);
  return data;
};

export const submitAssignment = async (assignmentId, payload) => {
  const { data } = await axiosInstance.post(`/submissions/assignments/${assignmentId}`, payload);
  return data;
};