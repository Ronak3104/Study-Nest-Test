const axios = require("axios");
const Certificate = require("../models/Certificate.model");
const { buildCertificatePayload } = require("../utils/certificatePayload");
const ApiError = require("../utils/ApiError");

const generateCertificate = async (data) => {
  const payload = buildCertificatePayload(data);

  try {
    const response = await axios.post(
      process.env.PYTHON_CERT_SERVICE_URL,
      payload,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    const certUrl = response.data.url || response.data; // Python returns secure_url

    await Certificate.create({
      user: data.userId,
      course: data.courseId,
      certificateId: data.certificateId,
      url: certUrl,
    });

    return certUrl;
  } catch (error) {
    throw new ApiError(500, "Certificate generation failed: " + error.message);
  }
};

module.exports = { generateCertificate };
