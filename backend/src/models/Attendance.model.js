const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true
    },
    status: {
      type: String,
      enum: ['present', 'absent'],
      default: 'present'
    },
    attendedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

attendanceSchema.index({ userId: 1, courseId: 1, lessonId: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;