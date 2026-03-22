import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/common/Loader';
import { ROUTES } from '../lib/routes';

const PublicRoute = () => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <Loader text="Loading..." />;
  }

  if (isAuthenticated) {
    if (user?.role === 'admin') return <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />;
    if (user?.role === 'instructor') return <Navigate to="/instructor/dashboard" replace />;
    return <Navigate to={ROUTES.STUDENT_DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;