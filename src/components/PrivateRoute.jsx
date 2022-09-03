import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('authToken') || null;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate('/login', {
        replace: true,
        state: location.pathname,
      });
    }
  }, [token, navigate, location.pathname]);

  return token && <Outlet />;
}

export default PrivateRoute;
