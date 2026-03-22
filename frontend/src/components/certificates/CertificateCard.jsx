import { Award } from 'lucide-react';
import Badge from '../common/Badge';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-4 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
            <Award size={22} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            {certificate.courseId?.title || 'Course Certificate'}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Certificate No: {certificate.certificateNumber}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Issued: {new Date(certificate.issuedAt).toLocaleDateString()}
          </p>
        </div>
        <Badge variant="success">{certificate.status || 'issued'}</Badge>
      </div>
    </div>
  );
};

export default CertificateCard;