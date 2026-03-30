const {
  markAttendance,
  getAttendance,
} = require("../services/attendance.service");

const mark = async (req, res) => {
  try {
    const record = await markAttendance(req.user.id, req.body);
    res.json({ success: true, data: record });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getMyAttendance = async (req, res) => {
  try {
    const attendance = await getAttendance(req.user.id, req.params.courseId);
    res.json({ success: true, data: attendance });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { mark, getMyAttendance };
