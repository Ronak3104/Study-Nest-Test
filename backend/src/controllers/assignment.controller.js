const {
  createAssignment,
  getAssignmentsForCourse,
  getAssignmentById,
} = require("../services/assignment.service");

const addAssignment = async (req, res) => {
  try {
    const assignment = await createAssignment(req.body, req.user.id);
    res.status(201).json({ success: true, data: assignment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getCourseAssignments = async (req, res) => {
  try {
    const assignments = await getAssignmentsForCourse(req.params.courseId);
    res.json({ success: true, data: assignments });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { addAssignment, getCourseAssignments };
