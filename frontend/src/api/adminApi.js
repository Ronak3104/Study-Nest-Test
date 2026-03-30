import axiosInstance from "./axiosInstance";

export const getAllUsers = () => axiosInstance.get("/admin/users");
export const changeUserRole = (userId, role) =>
  axiosInstance.put(`/admin/users/${userId}/role`, { role });
export const getAllCertificatesAdmin = () =>
  axiosInstance.get("/admin/certificates");
