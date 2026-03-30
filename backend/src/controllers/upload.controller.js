const { uploadToCloudinary } = require("../services/cloudinary.service");

const uploadFile = async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file);
    res.json({ success: true, url: result.secure_url });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { uploadFile };
