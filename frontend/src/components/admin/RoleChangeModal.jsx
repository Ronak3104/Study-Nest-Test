import { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";
import Select from "../common/Select";

export default function RoleChangeModal({
  isOpen,
  onClose,
  user,
  onRoleUpdate,
}) {
  const [newRole, setNewRole] = useState(user?.role || "student");

  const handleUpdate = () => {
    onRoleUpdate(user._id, newRole);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Change User Role">
      <div className="space-y-6">
        <p className="text-gray-400">
          User: <span className="font-semibold text-white">{user?.name}</span>
        </p>
        <Select
          label="New Role"
          options={[
            { value: "student", label: "Student" },
            { value: "teacher", label: "Teacher" },
            { value: "admin", label: "Admin" },
          ]}
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <Button onClick={handleUpdate} className="w-full">
          Update Role
        </Button>
      </div>
    </Modal>
  );
}
