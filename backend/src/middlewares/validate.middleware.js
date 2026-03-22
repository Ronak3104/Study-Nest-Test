const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  if (!schema) return next();

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return next(new ApiError(400, error.details.map((d) => d.message).join(', ')));
  }

  next();
};

module.exports = validate;