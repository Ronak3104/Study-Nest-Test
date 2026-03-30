const {
  getDashboardStats,
  getDemographics,
} = require("../services/analytics.service");

const dashboardStats = async (req, res) => {
  try {
    const stats = await getDashboardStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const demographics = async (req, res) => {
  try {
    const data = await getDemographics();
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { dashboardStats, demographics };
