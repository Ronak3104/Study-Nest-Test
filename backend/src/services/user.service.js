const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');

const updateMyProfile = async (userId, updates) => {
  const user = await User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true
  }).select('-password');
  return user;
};

const getAllUsers = async () => {
  return User.find().select('-password').sort({ createdAt: -1 });
};

const changeRole = async (userId, role) => {
  const user = await User.findByIdAndUpdate(userId, { role }, { new: true, runValidators: true })
    .select('-password');

  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

module.exports = { updateMyProfile, getAllUsers, changeRole };