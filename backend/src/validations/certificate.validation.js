const Joi = require('joi');

const issueCertificateSchema = Joi.object({
  courseId: Joi.string().required(),
  certificateUrl: Joi.string().allow('').optional()
});

module.exports = { issueCertificateSchema };