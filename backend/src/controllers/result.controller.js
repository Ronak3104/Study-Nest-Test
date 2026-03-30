const { getMyResults } = require("../services/result.service");

const fetchResults = async (req, res) => {
  try {
    const results = await getMyResults(req.user.id);
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { fetchResults };
