const Progress = require("../models/Progress.model");

const getProgress = async (userId, courseId) => {
  return (
    (await Progress.findOne({ user: userId, course: courseId })) || {
      progressPercentage: 0,
    }
  );
};

const updateProgress = async (userId, courseId, data) => {
  return await Progress.findOneAndUpdate(
    { user: userId, course: courseId },
    { ...data, lastAccessedAt: Date.now() },
    { new: true, upsert: true },
  );
};

module.exports = { getProgress, updateProgress };
