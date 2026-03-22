import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import CertificatesTable from '../../components/admin/CertificatesTable';
import { getAllCertificates } from '../../api/certificateApi';

const AdminCertificatesPage = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await getAllCertificates();
        setCertificates(response.data || []);
      } catch {
        setCertificates([]);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Issued Certificates</h1>
        <CertificatesTable certificates={certificates} />
      </div>
    </AdminLayout>
  );
};

export default AdminCertificatesPage;