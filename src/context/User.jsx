import { createContext, useContext, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Extract all auth logic
  const {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    initializeAuth,
  } = useAuth();

  // Call initializeAuth() ONCE when the provider mounts
  useEffect(() => {
    initializeAuth();
  }, []);

  // Wrap login and logout for context usage (optional, for consistency)
  const login = (email, password) => handleLogin(email, password);
  const logout = () => handleLogout();

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
