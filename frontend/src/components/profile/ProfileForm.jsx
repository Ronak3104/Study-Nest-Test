import { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

const ProfileForm = ({ user, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    gender: user?.gender || 'prefer_not_to_say',
    age: user?.age || '',
    city: user?.city || '',
    state: user?.state || '',
    country: user?.country || ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">Edit Profile</h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
            { label: 'Prefer not to say', value: 'prefer_not_to_say' }
          ]}
        />
        <Input label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
        <Input label="City" name="city" value={formData.city} onChange={handleChange} />
        <Input label="State" name="state" value={formData.state} onChange={handleChange} />
        <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
      </div>

      <Button className="mt-6" type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default ProfileForm;