const Joi = require("joi");

const createAssignment = Joi.object({
  course: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string(),
  dueDate: Joi.date(),
  maxScore: Joi.number().default(100),
});

module.exports = { createAssignment };
