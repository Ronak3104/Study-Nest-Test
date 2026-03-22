const Assignment = require('../models/Assignment.model');
const ApiError = require('../utils/ApiError');

const createAssignment = async (data) => Assignment.create(data);

const listByCourse = async (courseId) =>
  Assignment.find({ courseId }).sort({ createdAt: -1 });

const getById = async (assignmentId) => {
  const assignment = await Assignment.findById(assignmentId);
  if (!assignment) throw new ApiError(404, 'Assignment not found');
  return assignment;
};

module.exports = { createAssignment, listByCourse, getById };