import { createContext, useContext, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    initializeAuth,
  } = useAuth();

  useEffect(() => {
    initializeAuth();
  }, []);

  const login = (email, password) => handleLogin(email, password);
  const logout = () => handleLogout();

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
