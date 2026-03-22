import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CertificateCard from '../../components/certificates/CertificateCard';
import CertificatePreview from '../../components/certificates/CertificatePreview';
import DownloadCertificateButton from '../../components/certificates/DownloadCertificateButton';
import Loader from '../../components/common/Loader';
import EmptyState from '../../components/common/EmptyState';
import { getMyCertificates } from '../../api/certificateApi';

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await getMyCertificates();
        setCertificates(response.data || []);
        setSelectedCertificate(response.data?.[0] || null);
      } catch {
        setCertificates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-900">Certificates</h1>
      <p className="mt-2 text-slate-600">View and download your earned certificates.</p>

      <div className="mt-8">
        {loading ? (
          <Loader text="Loading certificates..." />
        ) : certificates.length === 0 ? (
          <EmptyState title="No certificates yet" description="Complete courses to earn certificates." />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            <div className="space-y-4">
              {certificates.map((certificate) => (
                <button
                  key={certificate._id}
                  className="w-full text-left"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <CertificateCard certificate={certificate} />
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <CertificatePreview certificateUrl={selectedCertificate?.certificateUrl} />
              <DownloadCertificateButton certificateUrl={selectedCertificate?.certificateUrl} />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CertificatesPage;