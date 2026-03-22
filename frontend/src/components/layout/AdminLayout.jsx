import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar role="admin" />
        <main className="min-h-screen flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;