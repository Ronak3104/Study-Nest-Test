const Joi = require("joi");

const createQuiz = Joi.object({
  course: Joi.string().required(),
  title: Joi.string().required(),
  questions: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().required(),
        options: Joi.array().items(Joi.string()).min(2).required(),
        correctAnswer: Joi.number().min(0).required(),
      }),
    )
    .min(1)
    .required(),
});

module.exports = { createQuiz };
