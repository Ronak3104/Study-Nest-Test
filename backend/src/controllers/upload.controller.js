const streamifier = require('streamifier');
const cloudinary = require('../config/cloudinary');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const streamUpload = (buffer, folder, resourceType = 'auto') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

const uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, 'No file uploaded');
  }

  const folder = req.body.folder || 'studynest/uploads';

  const result = await streamUpload(req.file.buffer, folder, 'auto');

  res.status(200).json(
    new ApiResponse(200, 'File uploaded successfully', {
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type
    })
  );
});

module.exports = {
  uploadFile
};