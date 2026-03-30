const Joi = require("joi");

const createSession = Joi.object({
  courseId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  courseName: Joi.string().required(),
});

module.exports = { createSession };
