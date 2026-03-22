const Joi = require('joi');

const createAssignmentSchema = Joi.object({
  courseId: Joi.string().required(),
  title: Joi.string().min(2).max(200).required(),
  description: Joi.string().allow('').optional(),
  dueDate: Joi.date().optional(),
  fileUrl: Joi.string().allow('').optional()
});

module.exports = { createAssignmentSchema };