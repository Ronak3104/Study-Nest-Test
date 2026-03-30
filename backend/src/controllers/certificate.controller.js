const { generateCertificate } = require("../services/certificate.service");

const issueCertificate = async (req, res) => {
  try {
    const certificateUrl = await generateCertificate(req.body);
    res.json({
      success: true,
      message: "Certificate generated",
      url: certificateUrl,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getMyCertificates = async (req, res) => {
  try {
    // service will be added later
    res.json({ success: true, data: [] }); // placeholder until service is ready
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { issueCertificate, getMyCertificates };
