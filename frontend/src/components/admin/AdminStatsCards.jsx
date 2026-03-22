const AdminStatsCards = ({ stats }) => {
  const items = [
    { label: 'Total Users', value: stats?.totalUsers || 0 },
    { label: 'Students', value: stats?.totalStudents || 0 },
    { label: 'Instructors', value: stats?.totalInstructors || 0 },
    { label: 'Courses', value: stats?.totalCourses || 0 },
    { label: 'Enrollments', value: stats?.totalEnrollments || 0 },
    { label: 'Certificates', value: stats?.totalCertificates || stats?.totalCertificatesIssued || 0 }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsCards;