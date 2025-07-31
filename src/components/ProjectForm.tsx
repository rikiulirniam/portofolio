import { useState } from 'react';

interface Props {
  initial?: Partial<Project>;
  onSubmit: (formData: FormData) => void;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string;
  image: string;
}

const ProjectForm = ({ initial = {}, onSubmit }: Props) => {
  const [name, setName] = useState(initial.name || '');
  const [description, setDescription] = useState(initial.description || '');
  const [tech, setTech] = useState(initial.tech || '');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('tech', tech);
    if (image) formData.append('image', image);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project name" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input value={tech} onChange={(e) => setTech(e.target.value)} placeholder="Tech stack" required />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
