const User = require("../models/User.model");
const ApiError = require("../utils/ApiError");

const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) throw new ApiError(404, "User not found");
  return user;
};

const updateProfile = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");
  if (!user) throw new ApiError(404, "User not found");
  return user;
};

module.exports = { getProfile, updateProfile };
