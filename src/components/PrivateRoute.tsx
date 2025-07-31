// src/components/PrivateRoute.tsx
import { useEffect, useState, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<null | boolean>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        await axios.get('http://localhost:8080/api/verify', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>; // Loading spinner jika perlu
  }

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
