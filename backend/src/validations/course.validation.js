const Joi = require("joi");

const createCourse = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  description: Joi.string().min(20).required(),
  price: Joi.number().min(0).default(0),
  duration: Joi.string(),
  thumbnail: Joi.string().uri(),
});

module.exports = { createCourse };
