export default function UsersTable({ users, onRoleChange }) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-6">Name</th>
            <th className="text-left p-6">Email</th>
            <th className="text-left p-6">Role</th>
            <th className="p-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b border-gray-700 last:border-none"
            >
              <td className="p-6">{user.name}</td>
              <td className="p-6 text-gray-400">{user.email}</td>
              <td className="p-6">
                <span className="capitalize px-4 py-1 bg-gray-700 rounded-full text-xs">
                  {user.role}
                </span>
              </td>
              <td className="p-6">
                <button
                  onClick={() => onRoleChange(user._id)}
                  className="text-primary hover:underline text-sm"
                >
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
