const User = require("../models/User.model");
const Certificate = require("../models/Certificate.model");
const ApiError = require("../utils/ApiError");

// Get all users
const getAllUsers = async () => {
  return await User.find().select("-password").sort({ createdAt: -1 });
};

// Change user role
const changeUserRole = async (userId, newRole) => {
  if (!["student", "teacher", "admin"].includes(newRole)) {
    throw new ApiError(400, "Invalid role");
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { role: newRole },
    { new: true, runValidators: true },
  ).select("-password");

  if (!user) throw new ApiError(404, "User not found");
  return user;
};

// Get all certificates for admin
const getAllCertificatesAdmin = async () => {
  return await Certificate.find()
    .populate("user", "name email")
    .populate("course", "title")
    .sort({ issuedAt: -1 });
};

// Delete user (admin only)
const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) throw new ApiError(404, "User not found");
};

module.exports = {
  getAllUsers,
  changeUserRole,
  getAllCertificatesAdmin,
  deleteUser,
};
