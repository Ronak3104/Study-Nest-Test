import axiosInstance from "./axiosInstance";

export const createPaymentSession = (data) =>
  axiosInstance.post("/payment/create-session", data);
