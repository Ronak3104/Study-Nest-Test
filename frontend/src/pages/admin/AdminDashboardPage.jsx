import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import AdminStatsCards from '../../components/admin/AdminStatsCards';
import AnalyticsCards from '../../components/admin/AnalyticsCards';
import { getAnalyticsOverview } from '../../api/adminApi';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getAnalyticsOverview();
        setStats(response.data);
      } catch {
        setStats({
          totalUsers: 0,
          totalStudents: 0,
          totalInstructors: 0,
          totalCourses: 0,
          totalEnrollments: 0,
          totalCertificates: 0
        });
      }
    };

    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="mt-2 text-slate-600">Overview of platform activity and statistics.</p>
        </div>

        <AdminStatsCards stats={stats} />
        <AnalyticsCards stats={stats} />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;