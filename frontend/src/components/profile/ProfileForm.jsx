import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

export default function ProfileForm({ user, onSave }) {
  const [form, setForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Textarea
        label="Bio"
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
        rows={4}
      />
      <Button type="submit" className="w-full">
        Save Changes
      </Button>
    </form>
  );
}
