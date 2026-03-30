const {
  enrollStudent,
  getEnrollments,
} = require("../services/enrollment.service");

const enrollInCourse = async (req, res) => {
  try {
    const enrollment = await enrollStudent(req.user.id, req.body.courseId);
    res.status(201).json({ success: true, data: enrollment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const myEnrollments = async (req, res) => {
  try {
    const enrollments = await getEnrollments(req.user.id);
    res.json({ success: true, data: enrollments });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { enrollInCourse, myEnrollments };
