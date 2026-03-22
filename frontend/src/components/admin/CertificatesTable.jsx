import Badge from '../common/Badge';

const CertificatesTable = ({ certificates = [] }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <h3 className="text-xl font-semibold text-slate-900">Certificates</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Certificate No</th>
              <th className="px-6 py-4">Issued Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate) => (
              <tr key={certificate._id} className="border-t border-slate-200 text-sm">
                <td className="px-6 py-4 font-medium text-slate-900">
                  {certificate.userId?.name}
                </td>
                <td className="px-6 py-4 text-slate-600">{certificate.courseId?.title}</td>
                <td className="px-6 py-4 text-slate-600">{certificate.certificateNumber}</td>
                <td className="px-6 py-4 text-slate-600">
                  {new Date(certificate.issuedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <Badge variant="success">{certificate.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificatesTable;