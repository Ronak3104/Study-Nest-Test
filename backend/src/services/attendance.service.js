const Attendance = require("../models/Attendance.model");

const markAttendance = async (userId, data) => {
  return await Attendance.create({ user: userId, ...data });
};

const getAttendance = async (userId, courseId) => {
  return await Attendance.find({ user: userId, course: courseId });
};

module.exports = { markAttendance, getAttendance };
