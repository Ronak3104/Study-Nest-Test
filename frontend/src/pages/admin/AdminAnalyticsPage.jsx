import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import DemographicsCharts from '../../components/admin/DemographicsCharts';
import AnalyticsCards from '../../components/admin/AnalyticsCards';
import { getAnalyticsOverview, getDemographics } from '../../api/adminApi';

const AdminAnalyticsPage = () => {
  const [stats, setStats] = useState(null);
  const [demographics, setDemographics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const [statsRes, demoRes] = await Promise.all([
          getAnalyticsOverview(),
          getDemographics()
        ]);

        setStats(statsRes.data);
        setDemographics(demoRes.data);
      } catch {
        setStats({});
        setDemographics({});
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Analytics & Demographics</h1>
        <AnalyticsCards stats={stats} />
        <DemographicsCharts demographics={demographics} />
      </div>
    </AdminLayout>
  );
};

export default AdminAnalyticsPage;