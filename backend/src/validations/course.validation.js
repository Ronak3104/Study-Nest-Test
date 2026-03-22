const Joi = require('joi');

const createCourseSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  description: Joi.string().min(10).required(),
  category: Joi.string().allow('').optional(),
  thumbnail: Joi.string().allow('').optional(),
  price: Joi.number().min(0).optional(),
  duration: Joi.string().allow('').optional(),
  level: Joi.string().valid('beginner', 'intermediate', 'advanced').optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  isPublished: Joi.boolean().optional()
});

const updateCourseSchema = createCourseSchema.fork(['title', 'description'], (schema) => schema.optional());

const addLessonSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  description: Joi.string().allow('').optional(),
  youtubeUrl: Joi.string().uri().required(),
  order: Joi.number().min(1).required(),
  duration: Joi.string().allow('').optional(),
  isPreview: Joi.boolean().optional()
});

module.exports = { createCourseSchema, updateCourseSchema, addLessonSchema };