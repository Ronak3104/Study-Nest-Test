// src/validations/auth.validation.js
const Joi = require("joi");

const register = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({ "string.min": "Name must be at least 3 characters long" }),

  email: Joi.string()
    .email()
    .required()
    .messages({ "string.email": "Please enter a valid email address" }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({ "string.min": "Password must be at least 6 characters long" }),

  role: Joi.string().valid("student", "teacher").default("student"),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { register, login };
