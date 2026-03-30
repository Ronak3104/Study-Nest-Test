const buildCertificatePayload = (data) => ({
  studentName: data.studentName,
  courseName: data.courseName,
  duration: data.duration || "8 weeks",
  issueDate: new Date().toLocaleDateString("en-IN"),
  certificateId: data.certificateId || `CERT-${Date.now()}`,
});

module.exports = { buildCertificatePayload };
