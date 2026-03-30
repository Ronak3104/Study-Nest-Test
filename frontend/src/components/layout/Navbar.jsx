import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../app/store";
import Button from "../common/Button";

export default function Navbar() {
  const { user, token, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <nav className="bg-background border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="StudyNest" className="h-9" />
          <span className="text-2xl font-bold text-white tracking-tight">
            StudyNest
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {token && user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <span className="w-5 h-5 bg-indigo-400 rounded-sm flex items-center justify-center text-xs font-bold text-white">D</span>
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-white">U</span>
                Profile
              </Link>

              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-400 hover:text-red-500 border-red-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition"
              >
                Login
              </Link>

              <Link to="/register">
                <Button variant="primary">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
