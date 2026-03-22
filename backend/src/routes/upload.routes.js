const express = require('express');
const { uploadFile } = require('../controllers/upload.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const upload = require('../middlewares/upload.middleware');

const router = express.Router();

// Use for PDFs/images uploads to Cloudinary
router.post(
  '/',
  protect,
  allowRoles('student', 'instructor', 'admin'),
  upload.single('file'),
  uploadFile
);

module.exports = router;