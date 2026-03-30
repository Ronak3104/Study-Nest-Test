const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: { type: Number, default: 0 },
    duration: { type: String }, // e.g., "8 weeks"
    thumbnail: { type: String }, // Cloudinary URL
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
