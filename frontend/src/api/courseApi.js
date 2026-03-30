import axiosInstance from "./axiosInstance";

export const getAllCourses = (params) =>
  axiosInstance.get("/courses", { params });
export const getCourseById = (id) => axiosInstance.get(`/courses/${id}`);
export const createCourse = (data) => axiosInstance.post("/courses", data);
export const getMyCourses = (userId) => getAllCourses({ instructorId: userId });
