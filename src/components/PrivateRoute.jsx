import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function PrivateRoute() {
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser) navigate('/', { replace: true });
  });

  return <Outlet />;
}

export default PrivateRoute;
