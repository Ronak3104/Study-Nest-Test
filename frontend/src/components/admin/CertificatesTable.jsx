export default function CertificatesTable({ certificates }) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-6">Student</th>
            <th className="text-left p-6">Course</th>
            <th className="text-left p-6">Issued On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert) => (
            <tr key={cert._id} className="border-b border-gray-700">
              <td className="p-6">{cert.user?.name}</td>
              <td className="p-6">{cert.course?.title}</td>
              <td className="p-6 text-gray-400">
                {new Date(cert.issuedAt).toLocaleDateString()}
              </td>
              <td className="p-6">
                <a href={cert.url} target="_blank" className="text-primary">
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
