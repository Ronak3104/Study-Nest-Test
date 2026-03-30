const { getProgress, updateProgress } = require("../services/progress.service");

const getCourseProgress = async (req, res) => {
  try {
    const progress = await getProgress(req.user.id, req.params.courseId);
    res.json({ success: true, data: progress });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateCourseProgress = async (req, res) => {
  try {
    const progress = await updateProgress(
      req.user.id,
      req.params.courseId,
      req.body,
    );
    res.json({ success: true, data: progress });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getCourseProgress, updateCourseProgress };
