import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Award,
  BarChart3,
  UserCircle,
  FileText,
  ClipboardList
} from 'lucide-react';

const links = {
  student: [
    { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/my-courses', label: 'My Courses', icon: BookOpen },
    { to: '/student/assignments', label: 'Assignments', icon: FileText },
    { to: '/student/quizzes', label: 'Quizzes', icon: ClipboardList },
    { to: '/student/certificates', label: 'Certificates', icon: Award },
    { to: '/student/profile', label: 'Profile', icon: UserCircle }
  ],
  instructor: [
    { to: '/instructor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/instructor/courses', label: 'Manage Courses', icon: BookOpen },
    { to: '/instructor/assignments', label: 'Assignments', icon: FileText },
    { to: '/instructor/quizzes', label: 'Quizzes', icon: ClipboardList },
    { to: '/instructor/submissions', label: 'Submissions', icon: Users }
  ],
  admin: [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/users', label: 'Users', icon: Users },
    { to: '/admin/courses', label: 'Courses', icon: BookOpen },
    { to: '/admin/certificates', label: 'Certificates', icon: Award },
    { to: '/admin/analytics', label: 'Analytics', icon: BarChart3 }
  ]
};

const Sidebar = ({ role = 'student' }) => {
  const items = links[role] || links.student;

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-white lg:block">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900">StudyNest</h2>
        <p className="text-sm text-slate-500 capitalize">{role} panel</p>
      </div>

      <nav className="space-y-1 px-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;