import AdminLayout from '../../components/layout/AdminLayout';
import Button from '../../components/common/Button';

const AdminSettingsPage = () => {
  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Settings</h1>
          <p className="mt-2 text-slate-600">Manage platform-level preferences and controls.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Platform Maintenance</h2>
          <p className="mt-3 text-sm text-slate-600">
            Add platform-related controls here such as maintenance mode, policies, or dashboard preferences.
          </p>

          <div className="mt-6">
            <Button variant="secondary">Save Settings</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettingsPage;