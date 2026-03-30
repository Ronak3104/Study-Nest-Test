export default function AssignmentCard({ assignment }) {
  return (
    <div className="bg-card p-6 rounded-3xl">
      <h4 className="font-semibold text-xl">{assignment.title}</h4>
      <p className="text-gray-400 mt-2 line-clamp-2">
        {assignment.description}
      </p>
      <p className="text-sm text-gray-400 mt-6">
        Due: {new Date(assignment.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
}
