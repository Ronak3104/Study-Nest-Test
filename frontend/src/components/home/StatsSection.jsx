import { BookOpen, Award, Users, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Courses Available', value: '50+', icon: BookOpen },
  { label: 'Active Learners', value: '1,200+', icon: Users },
  { label: 'Certificates Issued', value: '500+', icon: Award },
  { label: 'Completion Tracking', value: '100%', icon: BarChart3 }
];

const StatsSection = () => {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-2xl bg-white/5 p-6">
              <Icon className="mb-4 text-brand-400" size={24} />
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;