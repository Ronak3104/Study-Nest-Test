// Badge import removed - using native styling
import { Button } from "../ui/button";

const RecentSubmissionsTable = ({ submissions }) => {
  return (
    <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Recent Submissions 
        <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">{submissions.length}</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 font-semibold">Student</th>
              <th className="text-left py-4 font-semibold">Assignment</th>
              <th className="text-left py-4 font-semibold">Course</th>
              <th className="text-left py-4 font-semibold">Submitted</th>
              <th className="text-left py-4 font-semibold">Grade</th>
              <th className="text-left py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission._id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4">
                  <div className="font-medium">{submission.studentName}</div>
                  <div className="text-sm text-gray-500">{submission.studentEmail}</div>
                </td>
                <td className="py-4 font-medium">{submission.assignmentTitle}</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{submission.courseTitle}</span>
                </td>
                <td className="py-4 text-sm text-gray-500">
                  {new Date(submission.submittedAt).toLocaleDateString()}
                </td>
                <td className="py-4">
                  {submission.grade ? (
                    <span className={submission.grade >= 80 ? 'px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium' : 'px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium'}>
                      {submission.grade}%
                    </span>
                  ) : (
                    <span className="text-gray-400">Pending</span>
                  )}
                </td>
                <td className="py-4">
                  <Button size="sm" variant="outline" className="text-xs">
                    Grade
                  </Button>
                </td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan="6" className="py-12 text-center text-gray-500">
                  No recent submissions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSubmissionsTable;

