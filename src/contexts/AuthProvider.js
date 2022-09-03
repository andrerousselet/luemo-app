import PropTypes from 'prop-types';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase';
import generateErrorMessage from '../helpers/error.message';

function AuthProvider({ children }) {
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const register = useCallback(async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      generateErrorMessage({ message: error.message, setErrors });
    }
  }, [navigate]);

  const login = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(location.state ? location.state : '/', { replace: true });
    } catch (error) {
      generateErrorMessage({ message: error.message, setErrors });
    }
  }, [location.state, navigate]);

  const logout = useCallback(async () => {
    await signOut(auth);
    localStorage.removeItem('authToken');
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const path = location.state ? location.state : location.pathname;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('authToken', user.accessToken);
        navigate(path, { replace: true });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [location.pathname, location.state, navigate]);

  const contextValue = useMemo(() => ({
    register,
    login,
    logout,
    errors,
  }), [register, login, logout, errors]);

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
