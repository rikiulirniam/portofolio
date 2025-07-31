const API_URL = 'http://localhost:8080';

export const getToken = () => localStorage.getItem('token');

export const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/projects`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return res.json();
};

export const createProject = async (formData: FormData) => {
  const res = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    body: formData
  });
  return res.json();
};

export const updateProject = async (id: number, formData: FormData) => {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    body: formData
  });
  return res.json();
};

export const deleteProject = async (id: number) => {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.json();
};
