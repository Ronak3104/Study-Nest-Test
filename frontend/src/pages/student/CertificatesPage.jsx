import DashboardLayout from "../../components/layout/DashboardLayout";
import CertificateCard from "../../components/certificates/CertificateCard";

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">My Certificates</h1>
      <CertificateCard
        certificate={{
          course: { title: "Full Stack Development" },
          issuedAt: new Date(),
        }}
      />
    </DashboardLayout>
  );
}
