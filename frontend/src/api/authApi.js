// src/api/authApi.js
import axiosInstance from "./axiosInstance";

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response;
  } catch (error) {
    console.error(
      "❌ Register API Error:",
      error.response?.data || error.message,
    );
    throw error; // Important: re-throw so form can catch it
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response;
  } catch (error) {
    console.error("❌ Login API Error:", error.response?.data || error.message);
    throw error;
  }
};
