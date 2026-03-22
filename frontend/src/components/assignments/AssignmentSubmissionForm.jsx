import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const AssignmentSubmissionForm = ({ onSubmit, loading = false }) => {
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ fileUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">Submit Assignment</h3>
      <div className="mt-5 space-y-4">
        <Input
          label="Cloudinary File URL"
          placeholder="Paste uploaded file URL"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default AssignmentSubmissionForm;