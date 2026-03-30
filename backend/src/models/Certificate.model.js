const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    certificateId: { type: String, unique: true, required: true },
    url: { type: String, required: true }, // Cloudinary PDF URL
    issuedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Certificate", certificateSchema);
