const ApiError = require('../utils/ApiError');

const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, 'Not authorized'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Access denied'));
    }

    next();
  };
};

module.exports = allowRoles;