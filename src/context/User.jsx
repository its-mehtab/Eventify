import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth"; // Import your custom hook

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Use your existing useAuth hook
  const { user, loading, login: handleLogin, initializeAuth } = useAuth();

  // Wrap your hook's functions to match context API
  const login = async (email, password) => {
    const success = await handleLogin(email, password);
    return success;
  };

  // Initialize auth when provider mounts
  // initializeAuth();

  return (
    <UserContext.Provider value={{ user, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
