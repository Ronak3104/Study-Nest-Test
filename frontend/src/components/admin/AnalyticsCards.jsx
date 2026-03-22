const AnalyticsCards = ({ stats }) => {
  const cards = [
    { title: 'Total Users', value: stats?.totalUsers || 0 },
    { title: 'Total Courses', value: stats?.totalCourses || 0 },
    { title: 'Total Enrollments', value: stats?.totalEnrollments || 0 },
    { title: 'Certificates Issued', value: stats?.totalCertificates || stats?.totalCertificatesIssued || 0 }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{card.title}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;