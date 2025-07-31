// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Project } from '../components/ProjectForm'

interface Projects extends Project {
    created_at: string
}


export default function Dashboard() {
  const [projects, setProjects] = useState<Projects[]>([])
  const [form, setForm] = useState<FormData | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const token = localStorage.getItem('token')

  const fetchProjects = async () => {
    const res = await axios.get<Projects[]>('http://localhost:8080/projects', {
      headers: { Authorization: `Bearer ${token}` },
    })
    setProjects(res.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newForm = form || new FormData()
    newForm.set(e.target.name, e.target.value)
    setForm(newForm)
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const newForm = form || new FormData()
      newForm.set('image', file)
      setForm(newForm)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form) return
    await axios.post('http://localhost:8080/projects', form, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    setForm(null)
    setPreviewUrl(null)
    fetchProjects()
  }

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    fetchProjects()
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard Project</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 mb-10">
        <input
          name="name"
          onChange={handleChange}
          placeholder="Project Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          name="tech"
          onChange={handleChange}
          placeholder="Technology Stack"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input type="file" onChange={handleImage} className="w-full" />
        {previewUrl && <img src={previewUrl} alt="Preview" className="h-32 object-cover rounded" />}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Add Project
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            {p.image && (
              <img
                src={`http://localhost:8080/img/${p.image}`}
                alt={p.name}
                className="h-40 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-gray-600 mb-2">{p.tech}</p>
              <p className="text-gray-500 text-sm mb-4">{p.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{new Date(p.created_at).toLocaleDateString()}</span>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
