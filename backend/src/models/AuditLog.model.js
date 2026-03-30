const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    action: { type: String, required: true },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    target: { type: String }, // e.g., "User", "Course"
    targetId: { type: mongoose.Schema.Types.ObjectId },
    details: { type: Object },
  },
  { timestamps: true },
);

module.exports = mongoose.model("AuditLog", auditLogSchema);
