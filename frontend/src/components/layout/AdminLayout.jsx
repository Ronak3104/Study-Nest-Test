import Navbar from "./Navbar";
import { BarChart3, Users, BookOpen, Award } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const adminNav = [
  { to: "/admin/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/courses", label: "Courses", icon: BookOpen },
  { to: "/admin/certificates", label: "Certificates", icon: Award },
];

export default function AdminLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <div className="flex">
        {/* Admin Sidebar */}
        <div className="w-64 bg-card border-r border-gray-700 p-6 h-screen fixed">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            Admin Panel
          </div>
          {adminNav.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 transition ${
                  active ? "bg-primary text-white" : "hover:bg-gray-700"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </div>
        <main className="flex-1 ml-64 p-8">{children}</main>
      </div>
    </div>
  );
}
