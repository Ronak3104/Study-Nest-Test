import axiosInstance from "./axiosInstance";

export const getRecentSubmissions = () => axiosInstance.get("/submissions/recent");
export const getCourseSubmissions = (courseId) => axiosInstance.get(`/submissions/course/${courseId}`);
export const getAssignmentSubmissions = (assignmentId) => axiosInstance.get(`/submissions/assignment/${assignmentId}`);
export const gradeSubmission = (submissionId, grade) => axiosInstance.patch(`/submissions/${submissionId}/grade`, { grade });

