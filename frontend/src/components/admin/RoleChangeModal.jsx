import { useState } from 'react';
import Modal from '../common/Modal';
import Select from '../common/Select';
import Button from '../common/Button';

const RoleChangeModal = ({ isOpen, user, onClose, onSubmit, loading = false }) => {
  const [role, setRole] = useState(user?.role || 'student');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(role);
  };

  return (
    <Modal isOpen={isOpen} title="Change User Role" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <p className="text-sm text-slate-600">
          Update role for <span className="font-semibold">{user?.name}</span>
        </p>

        <Select
          label="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          options={[
            { label: 'Student', value: 'student' },
            { label: 'Instructor', value: 'instructor' },
            { label: 'Admin', value: 'admin' }
          ]}
        />

        <div className="flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Role'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RoleChangeModal;