export default function SubmissionList({ submissions }) {
  return (
    <div className="space-y-4">
      {submissions.map((sub) => (
        <div
          key={sub._id}
          className="flex justify-between bg-card p-4 rounded-2xl"
        >
          <div>
            <p className="font-medium">{sub.student?.name}</p>
            <a
              href={sub.fileUrl}
              target="_blank"
              className="text-primary text-sm"
            >
              View File
            </a>
          </div>
          {sub.score && (
            <span className="text-success font-bold">{sub.score} pts</span>
          )}
        </div>
      ))}
    </div>
  );
}
