import DashboardLayout from "../../components/layout/DashboardLayout";
import DemographicsCharts from "../../components/admin/DemographicsCharts";

export default function AdminAnalyticsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <DemographicsCharts
        roleDistribution={[
          { _id: "student", count: 85 },
          { _id: "teacher", count: 12 },
          { _id: "admin", count: 3 },
        ]}
      />
    </DashboardLayout>
  );
}
