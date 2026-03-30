import DashboardLayout from "../../components/layout/DashboardLayout";
import ProgressBar from "../../components/progress/ProgressBar";
import AttendanceCard from "../../components/progress/AttendanceCard";
import ProgressLineChart from "../../components/progress/ProgressLineChart";

export default function StudentDashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Welcome back, Ronak!</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProgressLineChart
            data={[
              { day: "Mon", progress: 40 },
              { day: "Tue", progress: 65 },
              { day: "Wed", progress: 80 },
            ]}
          />
        </div>
        <div>
          <AttendanceCard
            attendanceData={[
              { status: "present" },
              { status: "present" },
              { status: "absent" },
            ]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
