const Attendance = require('../models/Attendance.model');
const Progress = require('../models/Progress.model');
const Lesson = require('../models/Lesson.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const markAttendance = asyncHandler(async (req, res) => {
  const { courseId, lessonId } = req.body;

  const attendance = await Attendance.findOneAndUpdate(
    {
      userId: req.user._id,
      courseId,
      lessonId
    },
    {
      status: 'present',
      attendedAt: new Date()
    },
    {
      new: true,
      upsert: true
    }
  );

  await Progress.findOneAndUpdate(
    { userId: req.user._id, courseId },
    { $addToSet: { completedLessons: lessonId } },
    { new: true }
  );

  res.status(200).json(new ApiResponse(200, 'Attendance marked successfully', attendance));
});

const getMyAttendanceByCourse = asyncHandler(async (req, res) => {
  const records = await Attendance.find({
    userId: req.user._id,
    courseId: req.params.courseId
  }).populate('lessonId', 'title order');

  const totalAttended = records.length;
  const totalLessons = await Lesson.countDocuments({ courseId: req.params.courseId });

  res.status(200).json(
    new ApiResponse(200, 'Attendance fetched successfully', {
      totalAttended,
      totalLessons,
      records
    })
  );
});

module.exports = {
  markAttendance,
  getMyAttendanceByCourse
};