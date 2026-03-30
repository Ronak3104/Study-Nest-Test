const {
  getTotalUsers,
  getTotalCourses,
  getDemographicStats,
} = require("../utils/demographics");

const getDashboardStats = async () => {
  return {
    totalUsers: await getTotalUsers(),
    totalCourses: await getTotalCourses(),
    totalCertificates: 0, // add later if needed
  };
};

const getDemographics = async () => {
  return await getDemographicStats();
};

module.exports = { getDashboardStats, getDemographics };
