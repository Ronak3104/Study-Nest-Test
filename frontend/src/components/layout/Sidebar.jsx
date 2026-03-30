import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Award, User, BarChart3 } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/my-courses", label: "My Courses", icon: BookOpen },
  { to: "/certificates", label: "Certificates", icon: Award },
  { to: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-card border-r border-gray-700 p-6 fixed">
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Icon size={22} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
