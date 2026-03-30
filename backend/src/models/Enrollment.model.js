const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    enrolledAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    progress: { type: Number, default: 0, min: 0, max: 100 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);
