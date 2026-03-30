import axiosInstance from "./axiosInstance";

export const getMyCertificates = () => axiosInstance.get("/certificates/my");
