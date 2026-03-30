const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: { type: String, required: true },
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: Number, // index of correct option
      },
    ],
    maxScore: { type: Number, default: 100 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Quiz", quizSchema);
