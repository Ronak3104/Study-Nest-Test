// src/routes/auth.routes.js
const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.controller");
const asyncHandler = require("../utils/asyncHandler");
const validate = require("../middlewares/validate.middleware");
const authValidation = require("../validations/auth.validation");
const { authLimiter } = require("../middlewares/rateLimit.middleware");

router.post(
  "/register",
  authLimiter,
  validate(authValidation.register),
  asyncHandler(register)
);

router.post("/login", authLimiter, validate(authValidation.login), asyncHandler(login));

module.exports = router;
