const Result = require("../models/Result.model");

const getMyResults = async (userId) => {
  return await Result.find({ user: userId });
};

module.exports = { getMyResults };
