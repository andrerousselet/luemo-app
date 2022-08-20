import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
