const Joi = require('joi');

const createQuizSchema = Joi.object({
  courseId: Joi.string().required(),
  title: Joi.string().min(2).max(200).required(),
  questions: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().min(2).required(),
        options: Joi.array().items(Joi.object({ text: Joi.string().required() })).min(2).required(),
        correctAnswerIndex: Joi.number().min(0).required()
      })
    )
    .default([])
});

const attemptQuizSchema = Joi.object({
  answers: Joi.array()
    .items(
      Joi.object({
        questionIndex: Joi.number().min(0).required(),
        selectedAnswerIndex: Joi.number().min(0).required()
      })
    )
    .required()
});

module.exports = { createQuizSchema, attemptQuizSchema };