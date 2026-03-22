const Submission = require('../models/Submission.model');

const submit = async ({ assignmentId, userId, fileUrl }) => {
  return Submission.findOneAndUpdate(
    { assignmentId, userId },
    { fileUrl, submittedAt: new Date() },
    { new: true, upsert: true, runValidators: true }
  );
};

const mySubmissions = async (userId) => {
  return Submission.find({ userId }).populate('assignmentId').sort({ createdAt: -1 });
};

module.exports = { submit, mySubmissions };