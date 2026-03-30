import DashboardLayout from "../../components/layout/DashboardLayout"; // Reuse or use AdminLayout
import AdminStatsCards from "../../components/admin/AdminStatsCards";
import AnalyticsCards from "../../components/admin/AnalyticsCards";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout>
      <AdminStatsCards
        stats={{ totalUsers: 124, totalCourses: 18, totalCertificates: 89 }}
      />
      <div className="mt-12">
        <AnalyticsCards data={{ revenue: 24500, avgRating: 4.9 }} />
      </div>
    </DashboardLayout>
  );
}
