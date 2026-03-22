const express = require('express');
const { issueCertificate, getMyCertificates, getAllCertificates } = require('../controllers/certificate.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { issueCertificateSchema } = require('../validations/certificate.validation');

const router = express.Router();

router.get('/me', protect, getMyCertificates);
router.post('/issue', protect, validate(issueCertificateSchema), issueCertificate);

// admin
router.get('/', protect, allowRoles('admin'), getAllCertificates);

module.exports = router;