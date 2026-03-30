const ApiError = require("../utils/ApiError");

const hasRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      throw new ApiError(
        403,
        `Access denied. Required role(s): ${allowedRoles.join(", ")}`,
      );
    }
    next();
  };
};

module.exports = hasRole;
