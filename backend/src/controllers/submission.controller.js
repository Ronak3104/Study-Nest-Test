const Submission = require('../models/Submission.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const submitAssignment = asyncHandler(async (req, res) => {
  const submission = await Submission.findOneAndUpdate(
    {
      assignmentId: req.params.assignmentId,
      userId: req.user._id
    },
    {
      fileUrl: req.body.fileUrl,
      submittedAt: new Date()
    },
    {
      new: true,
      upsert: true,
      runValidators: true
    }
  );

  res.status(201).json(new ApiResponse(201, 'Assignment submitted successfully', submission));
});

const getMySubmissions = asyncHandler(async (req, res) => {
  const submissions = await Submission.find({ userId: req.user._id })
    .populate('assignmentId')
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, 'Submissions fetched successfully', submissions));
});

module.exports = {
  submitAssignment,
  getMySubmissions
};