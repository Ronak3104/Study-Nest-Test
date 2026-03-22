const SubmissionList = ({ submissions = [] }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">Submission History</h3>

      <div className="mt-5 space-y-4">
        {submissions.length === 0 ? (
          <p className="text-sm text-slate-500">No submissions found.</p>
        ) : (
          submissions.map((submission) => (
            <div key={submission._id} className="rounded-2xl border border-slate-200 p-4">
              <p className="font-medium text-slate-900">
                {submission.assignmentId?.title || 'Assignment'}
              </p>
              <a
                href={submission.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-brand-600 hover:text-brand-700"
              >
                View Submitted File
              </a>
              <p className="mt-2 text-sm text-slate-500">
                Submitted on: {new Date(submission.submittedAt).toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-slate-600">Marks: {submission.marks || 0}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubmissionList;