import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ token: string }>('http://localhost:8080/auth/login', form);
      const token = res.data.token;

      localStorage.setItem('token', token);
      setToken(token);
      setError('');
      window.location.href = "dashboard"
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete='none'
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-600 text-center">{error}</p>
        )}
        {token && (
          <p className="mt-4 text-green-600 text-center">Login berhasil!</p>
        )}
      </div>
    </div>
  );
};

export default Login;
