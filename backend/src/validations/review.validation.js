const Joi = require('joi');

const addReviewSchema = Joi.object({
  courseId: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().allow('').max(1000).optional()
});

module.exports = { addReviewSchema };