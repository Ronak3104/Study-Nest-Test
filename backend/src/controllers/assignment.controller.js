const Assignment = require('../models/Assignment.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const createAssignment = asyncHandler(async (req, res) => {
  const assignment = await Assignment.create(req.body);
  res.status(201).json(new ApiResponse(201, 'Assignment created successfully', assignment));
});

const getAssignmentsByCourse = asyncHandler(async (req, res) => {
  const assignments = await Assignment.find({ courseId: req.params.courseId }).sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, 'Assignments fetched successfully', assignments));
});

const getAssignmentById = asyncHandler(async (req, res) => {
  const assignment = await Assignment.findById(req.params.assignmentId);
  if (!assignment) {
    throw new ApiError(404, 'Assignment not found');
  }

  res.status(200).json(new ApiResponse(200, 'Assignment fetched successfully', assignment));
});

module.exports = {
  createAssignment,
  getAssignmentsByCourse,
  getAssignmentById
};