import { createContext, useEffect, useMemo, useState } from 'react';
import { getCurrentUser, loginUser, registerUser } from '../api/authApi';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('studynest_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('studynest_token'));
  const [loading, setLoading] = useState(true);

  const saveAuth = (tokenValue, userValue) => {
    localStorage.setItem('studynest_token', tokenValue);
    localStorage.setItem('studynest_user', JSON.stringify(userValue));
    setToken(tokenValue);
    setUser(userValue);
  };

  const clearAuth = () => {
    localStorage.removeItem('studynest_token');
    localStorage.removeItem('studynest_user');
    setToken(null);
    setUser(null);
  };

  const login = async (payload) => {
    const response = await loginUser(payload);
    saveAuth(response.data.token, response.data.user);
    return response;
  };

  const register = async (payload) => {
    const response = await registerUser(payload);
    saveAuth(response.data.token, response.data.user);
    return response;
  };

  const logout = () => {
    clearAuth();
  };

  const fetchCurrentUser = async () => {
    try {
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await getCurrentUser();
      setUser(response.data);
      localStorage.setItem('studynest_user', JSON.stringify(response.data));
    } catch (error) {
      clearAuth();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: !!token,
      login,
      register,
      logout,
      setUser
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;