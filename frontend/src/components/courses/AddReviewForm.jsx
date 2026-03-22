import { useState } from 'react';
import Button from '../common/Button';
import Textarea from '../common/Textarea';
import Select from '../common/Select';

const AddReviewForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    rating: 5,
    comment: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({
      rating: Number(formData.rating),
      comment: formData.comment
    });
  };

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold text-slate-900">Add Your Review</h3>

      <div className="mt-5 space-y-4">
        <Select
          label="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          options={[
            { label: '5 Stars', value: 5 },
            { label: '4 Stars', value: 4 },
            { label: '3 Stars', value: 3 },
            { label: '2 Stars', value: 2 },
            { label: '1 Star', value: 1 }
          ]}
        />

        <Textarea
          label="Comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Write your review..."
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </Button>
      </div>
    </form>
  );
};

export default AddReviewForm;