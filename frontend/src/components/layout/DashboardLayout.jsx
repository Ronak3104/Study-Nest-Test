import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 pb-20">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
