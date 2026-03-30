const Joi = require("joi");

const issueCertificate = Joi.object({
  userId: Joi.string().required(),
  courseId: Joi.string().required(),
  studentName: Joi.string().required(),
  courseName: Joi.string().required(),
  duration: Joi.string(),
  certificateId: Joi.string(),
});

module.exports = { issueCertificate };
