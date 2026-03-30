const { getProfile, updateProfile } = require("../services/user.service");

const getMyProfile = async (req, res) => {
  try {
    const user = await getProfile(req.user.id);
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateMyProfile = async (req, res) => {
  try {
    const user = await updateProfile(req.user.id, req.body);
    res.json({ success: true, message: "Profile updated", data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getMyProfile, updateMyProfile };
