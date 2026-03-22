const Joi = require('joi');

const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  phone: Joi.string().allow('').optional(),
  gender: Joi.string().valid('male', 'female', 'other', 'prefer_not_to_say').optional(),
  age: Joi.number().min(1).max(120).optional(),
  city: Joi.string().allow('').optional(),
  state: Joi.string().allow('').optional(),
  country: Joi.string().allow('').optional(),
  profileImage: Joi.string().allow('').optional()
});

const changeRoleSchema = Joi.object({
  role: Joi.string().valid('student', 'instructor', 'admin').required()
});

module.exports = { updateProfileSchema, changeRoleSchema };