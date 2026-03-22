import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import useAuth from '../../hooks/useAuth';

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar role={user?.role || 'student'} />
        <main className="min-h-screen flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;