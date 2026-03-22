import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import UsersTable from '../../components/admin/UsersTable';
import RoleChangeModal from '../../components/admin/RoleChangeModal';
import useModal from '../../hooks/useModal';
import { getAllUsers, changeUserRole } from '../../api/userApi';
import { toggleUserStatus } from '../../api/adminApi';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [roleLoading, setRoleLoading] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data || []);
    } catch {
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChangeRoleClick = (user) => {
    setSelectedUser(user);
    openModal();
  };

  const handleRoleUpdate = async (role) => {
    try {
      setRoleLoading(true);
      await changeUserRole(selectedUser._id, { role });
      await fetchUsers();
      closeModal();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update role');
    } finally {
      setRoleLoading(false);
    }
  };

  const handleToggleStatus = async (userId) => {
    try {
      await toggleUserStatus(userId);
      await fetchUsers();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to toggle user status');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Manage Users</h1>

        <UsersTable
          users={users}
          onChangeRole={handleChangeRoleClick}
          onToggleStatus={handleToggleStatus}
        />

        <RoleChangeModal
          isOpen={isOpen}
          user={selectedUser}
          onClose={closeModal}
          onSubmit={handleRoleUpdate}
          loading={roleLoading}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;