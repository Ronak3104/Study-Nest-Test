const {
  submitAssignment,
  getSubmissions,
} = require("../services/submission.service");

const submit = async (req, res) => {
  try {
    const submission = await submitAssignment(
      req.user.id,
      req.body.assignmentId,
      req.file,
    );
    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await getSubmissions(req.params.assignmentId);
    res.json({ success: true, data: submissions });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { submit, getAllSubmissions };
