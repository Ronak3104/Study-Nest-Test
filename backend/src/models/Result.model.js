const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
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
    assignmentScore: {
      type: Number,
      default: 0
    },
    quizScore: {
      type: Number,
      default: 0
    },
    totalScore: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

resultSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;