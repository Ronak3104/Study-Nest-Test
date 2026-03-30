import DashboardLayout from "../../components/layout/DashboardLayout";
import CertificatesTable from "../../components/admin/CertificatesTable";

export default function AdminCertificatesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">All Certificates</h1>
      <CertificatesTable certificates={[]} />
    </DashboardLayout>
  );
}
