import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({ token: null, user: null });

const [auth, setAuth] = useState(() => {
    // Initialize state from local storage (if available)
    const storedAuth = localStorage.getItem('auth') || "";
    return storedAuth ? JSON.parse(storedAuth) : { token: null, user: null, role: null};
  });


  const login = (token, user, role) => {
    setAuth({ token, user, role });
  };

  const registration = (token, user, role) => {
    setAuth({ token, user, role });
  };
  

  const logout = () => {
    setAuth({ token: null, user: null, role: null });
  };

  useEffect(() => {
    // Save auth state to local storage whenever it changes
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, login, registration, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};