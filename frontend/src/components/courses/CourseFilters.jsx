import Select from '../common/Select';

const CourseFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-3">
      <Select
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleChange}
        options={[
          { label: 'All Categories', value: '' },
          { label: 'Web Development', value: 'Web Development' },
          { label: 'Backend Development', value: 'Backend Development' },
          { label: 'Database', value: 'Database' }
        ]}
      />

      <Select
        label="Level"
        name="level"
        value={filters.level}
        onChange={handleChange}
        options={[
          { label: 'All Levels', value: '' },
          { label: 'Beginner', value: 'beginner' },
          { label: 'Intermediate', value: 'intermediate' },
          { label: 'Advanced', value: 'advanced' }
        ]}
      />

      <Select
        label="Price"
        name="price"
        value={filters.price}
        onChange={handleChange}
        options={[
          { label: 'All', value: '' },
          { label: 'Free', value: 'free' },
          { label: 'Paid', value: 'paid' }
        ]}
      />
    </div>
  );
};

export default CourseFilters;