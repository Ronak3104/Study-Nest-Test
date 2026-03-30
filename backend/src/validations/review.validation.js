const Joi = require("joi");

const createReview = Joi.object({
  course: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().max(500),
});

module.exports = { createReview };
