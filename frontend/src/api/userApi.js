// src/api/userApi.js
import axiosInstance from "./axiosInstance";

export const getProfile = async () => {
  return await axiosInstance.get("/users/profile");
};

export const updateProfile = async (data) => {
  return await axiosInstance.put("/users/profile", data);
};
