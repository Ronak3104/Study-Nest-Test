const Assignment = require("../models/Assignment.model");

const createAssignment = async (data, instructorId) => {
  data.instructor = instructorId; // optional if needed
  return await Assignment.create(data);
};

const getAssignmentsForCourse = async (courseId) => {
  return await Assignment.find({ course: courseId });
};

module.exports = { createAssignment, getAssignmentsForCourse };
