const cloudinary = require("../config/cloudinary"); // already configured

const uploadToCloudinary = async (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "studynest" }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      })
      .end(file.buffer);
  });
};

module.exports = { uploadToCloudinary };
