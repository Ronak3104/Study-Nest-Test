const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const getMyProfile = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, 'Profile fetched successfully', req.user));
});

const updateMyProfile = asyncHandler(async (req, res) => {
  const allowedFields = [
    'name',
    'phone',
    'gender',
    'age',
    'city',
    'state',
    'country',
    'profileImage'
  ];

  const updates = {};
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });

  const user = await User.findByIdAndUpdate(req.user._id, updates, {
    new: true,
    runValidators: true
  }).select('-password');

  res.status(200).json(new ApiResponse(200, 'Profile updated successfully', user));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, 'Users fetched successfully', users));
});

const changeUserRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const validRoles = ['student', 'instructor', 'admin'];
  if (!validRoles.includes(role)) {
    throw new ApiError(400, 'Invalid role');
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  res.status(200).json(new ApiResponse(200, 'User role updated successfully', user));
});

module.exports = {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  changeUserRole
};