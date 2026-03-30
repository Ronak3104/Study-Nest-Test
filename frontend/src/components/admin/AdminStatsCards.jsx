import { Users, BookOpen, Award } from "lucide-react";

export default function AdminStatsCards({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-3xl">
        <Users className="text-primary mb-4" size={32} />
        <p className="text-4xl font-bold">{stats.totalUsers}</p>
        <p className="text-gray-400">Total Users</p>
      </div>
      <div className="bg-card p-6 rounded-3xl">
        <BookOpen className="text-accent mb-4" size={32} />
        <p className="text-4xl font-bold">{stats.totalCourses}</p>
        <p className="text-gray-400">Total Courses</p>
      </div>
      <div className="bg-card p-6 rounded-3xl">
        <Award className="text-success mb-4" size={32} />
        <p className="text-4xl font-bold">{stats.totalCertificates}</p>
        <p className="text-gray-400">Certificates Issued</p>
      </div>
    </div>
  );
}
