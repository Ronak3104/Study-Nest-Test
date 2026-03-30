// src/middlewares/validate.middleware.js
const Joi = require("joi");
const ApiError = require("../utils/ApiError");

const validate = (schema) => (req, res, next) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return next(new ApiError(400, errorMessage)); // ← This was missing
  }

  req.body = value;
  next();
};

module.exports = validate;
