// src/controllers/auth.controller.js
const { registerUser, loginUser } = require("../services/auth.service");

const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error); // ← Pass error to error handler
  }
};

const login = async (req, res, next) => {
  try {
    const { token, user } = await loginUser(req.body);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
