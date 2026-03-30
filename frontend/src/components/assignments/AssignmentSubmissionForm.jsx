import { useState } from "react";
import Button from "../common/Button";

export default function AssignmentSubmissionForm({ assignmentId, onSubmit }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    onSubmit(assignmentId, file);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-6"
      />
      <Button type="submit" className="w-full">
        Submit Assignment
      </Button>
    </form>
  );
}
