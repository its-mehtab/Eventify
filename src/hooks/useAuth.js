import { useState } from "react";
import { login, logout, checkAuth } from "../api/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const { user: userData } = await login(email, password);
      localStorage.setItem("simpleAuth", JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!user) return;
    await logout(user.id);
    localStorage.removeItem("simpleAuth");
    setUser(null);
  };

  // Check existing session on app load
  const initializeAuth = () => {
    const savedUser = JSON.parse(localStorage.getItem("simpleAuth"));
    if (savedUser) {
      setUser(savedUser);
    }
  };

  return {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    initializeAuth,
  };
};
