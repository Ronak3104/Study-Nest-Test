// src/services/auth.service.js
const User = require("../models/User.model");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken"); // ← Fixed (default import)

const registerUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser)
    throw new ApiError(400, "User already exists with this email");

  const user = await User.create(userData);

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken(user); // ← Now works correctly

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = { registerUser, loginUser };
