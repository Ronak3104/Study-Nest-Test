const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');

const registerUser = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(400, 'User already exists with this email');

  const user = await User.create({ name, email, password, role: role || 'student' });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new ApiError(401, 'Invalid email or password');

  const ok = await user.comparePassword(password);
  if (!ok) throw new ApiError(401, 'Invalid email or password');

  return user;
};

module.exports = { registerUser, loginUser };