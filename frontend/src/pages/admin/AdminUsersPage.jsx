import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import UsersTable from "../../components/admin/UsersTable";
import RoleChangeModal from "../../components/admin/RoleChangeModal";

export default function AdminUsersPage() {
  const [users] = useState([]); // Fetch via adminApi
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">All Users</h1>
      <UsersTable users={users} onRoleChange={setSelectedUser} />
      {selectedUser && (
        <RoleChangeModal
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          user={selectedUser}
          onRoleUpdate={() => {}}
        />
      )}
    </DashboardLayout>
  );
}
