const Joi = require("joi");

const updateProfile = Joi.object({
  name: Joi.string().min(3).max(50),
  bio: Joi.string().max(500),
  avatar: Joi.string().uri(),
});

module.exports = { updateProfile };
