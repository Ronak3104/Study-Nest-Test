import axiosInstance from "./axiosInstance";

export const getCourseAssignments = (courseId) =>
  axiosInstance.get(`/assignments/course/${courseId}`);

export const createAssignment = (data) =>
  axiosInstance.post("/assignments", data);

export const submitAssignment = (data, file) => {
  const formData = new FormData();
  formData.append("assignmentId", data.assignmentId);
  formData.append("file", file);
  return axiosInstance.post("/submissions", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
