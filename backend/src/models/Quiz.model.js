const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true }
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: {
      type: [optionSchema],
      validate: {
        validator: function (value) {
          return value.length >= 2;
        },
        message: 'Each question must have at least 2 options'
      }
    },
    correctAnswerIndex: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const quizSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    questions: {
      type: [questionSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;