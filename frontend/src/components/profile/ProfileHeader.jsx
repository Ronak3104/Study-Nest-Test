export default function ProfileHeader({ user }) {
  return (
    <div className="bg-card rounded-3xl p-8 flex items-center gap-6">
      <img
        src={user.avatar || "/images/placeholder.png"}
        alt={user.name}
        className="w-24 h-24 rounded-2xl object-cover border-4 border-primary"
      />
      <div>
        <h2 className="text-4xl font-bold">{user.name}</h2>
        <p className="text-primary text-lg">{user.role}</p>
        <p className="text-gray-400 mt-1">{user.email}</p>
      </div>
    </div>
  );
}
