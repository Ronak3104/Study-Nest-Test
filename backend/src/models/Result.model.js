const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["quiz", "assignment"], required: true },
    referenceId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Quiz or Assignment ID
    score: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Result", resultSchema);
