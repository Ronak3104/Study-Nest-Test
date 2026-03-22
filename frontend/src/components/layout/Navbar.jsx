import { Link, NavLink } from 'react-router-dom';
import { BookOpen, GraduationCap, LayoutDashboard, LogOut } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import Button from '../common/Button';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-brand-600 p-2 text-white">
            <GraduationCap size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">StudyNest</p>
            <p className="text-xs text-slate-500">Smart Learning, Simplified</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className="text-sm font-medium text-slate-700 hover:text-brand-600">
            Home
          </NavLink>
          <NavLink to="/courses" className="text-sm font-medium text-slate-700 hover:text-brand-600">
            Courses
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-600"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Button variant="ghost" className="gap-2" onClick={logout}>
                <LogOut size={16} />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="gap-2">
                  <BookOpen size={16} />
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;