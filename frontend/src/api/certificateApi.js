import axiosInstance from './axiosInstance';

export const generateCertificate = async (payload) => {
  const { data } = await axiosInstance.post('/certificates/generate', payload);
  return data;
};

export const getMyCertificates = async () => {
  const { data } = await axiosInstance.get('/certificates/me');
  return data;
};

export const getAllCertificates = async () => {
  const { data } = await axiosInstance.get('/certificates');
  return data;
};