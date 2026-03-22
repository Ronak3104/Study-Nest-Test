import { CalendarDays, FileText } from 'lucide-react';
import Badge from '../common/Badge';

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
            <FileText size={20} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{assignment.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{assignment.description}</p>
        </div>
        <Badge variant="info">Assignment</Badge>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays size={16} />
        <span>
          Due: {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : 'No due date'}
        </span>
      </div>
    </div>
  );
};

export default AssignmentCard;