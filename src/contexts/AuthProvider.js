import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase';
import generateErrorMessage from '../helpers/error.message';

function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      generateErrorMessage({ message: error.message, setErrors });
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      generateErrorMessage({ message: error.message, setErrors });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoggedUser(currentUser);
        navigate('/home');
      } else {
        setLoggedUser();
      }
    });
    return unsubscribe;
  }, []);

  const contextValue = useMemo(() => ({
    loggedUser,
    register,
    login,
    logout,
    errors,
  }), [loggedUser, register, login, logout, errors]);

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
