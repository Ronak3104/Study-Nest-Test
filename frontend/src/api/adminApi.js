import axiosInstance from './axiosInstance';

export const getAdminDashboard = async () => {
  const { data } = await axiosInstance.get('/admin/dashboard');
  return data;
};

export const toggleUserStatus = async (userId) => {
  const { data } = await axiosInstance.patch(`/admin/users/${userId}/status`);
  return data;
};

export const getAnalyticsOverview = async () => {
  const { data } = await axiosInstance.get('/analytics/overview');
  return data;
};

export const getDemographics = async () => {
  const { data } = await axiosInstance.get('/analytics/demographics');
  return data;
};