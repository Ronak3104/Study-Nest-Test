const buildCertificatePayload = ({ studentName, courseTitle, certificateNumber, issuedAt }) => {
  return {
    studentName,
    courseTitle,
    certificateNumber,
    issuedAt: issuedAt || new Date().toISOString(),
    platform: 'StudyNest'
  };
};

module.exports = buildCertificatePayload;