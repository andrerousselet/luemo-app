import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('authToken') || null;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate('/', {
        replace: true,
        state: location.pathname,
      });
    }
  }, [token, navigate, location.pathname]);

  return <Outlet />;
}

export default PrivateRoute;
