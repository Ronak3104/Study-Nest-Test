import axiosInstance from './axiosInstance';

export const getMyProfile = async () => {
  const { data } = await axiosInstance.get('/users/me');
  return data;
};

export const updateMyProfile = async (payload) => {
  const { data } = await axiosInstance.patch('/users/me', payload);
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axiosInstance.get('/users');
  return data;
};

export const changeUserRole = async (userId, payload) => {
  const { data } = await axiosInstance.patch(`/users/${userId}/role`, payload);
  return data;
};