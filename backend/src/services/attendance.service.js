const Attendance = require('../models/Attendance.model');
const Progress = require('../models/Progress.model');
const Lesson = require('../models/Lesson.model');

const mark = async ({ userId, courseId, lessonId }) => {
  const attendance = await Attendance.findOneAndUpdate(
    { userId, courseId, lessonId },
    { status: 'present', attendedAt: new Date() },
    { new: true, upsert: true }
  );

  await Progress.findOneAndUpdate(
    { userId, courseId },
    { $addToSet: { completedLessons: lessonId } },
    { new: true }
  );

  return attendance;
};

const myAttendance = async ({ userId, courseId }) => {
  const records = await Attendance.find({ userId, courseId }).populate('lessonId', 'title order');
  const totalLessons = await Lesson.countDocuments({ courseId });
  return { records, totalAttended: records.length, totalLessons };
};

module.exports = { mark, myAttendance };