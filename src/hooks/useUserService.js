import { useState, useEffect } from "react";
import { addUser, checkIfUser, getUser, updateUser } from "../api/userService";

export const useUserService = () => {
  // State for user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for actions
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [actionSuccess, setActionSuccess] = useState(false);

  // Create a new user
  const createUser = async (name, email, password) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      const newUser = await addUser(name, email, password);
      setActionSuccess(true);
      return newUser;
    } catch (err) {
      setActionError(err.message);
      return null;
    } finally {
      setActionLoading(false);
    }
  };

  // Check if user exists by email
  const verifyUser = async (email) => {
    try {
      setLoading(true);
      setError(null);

      const existingUser = await checkIfUser(email);
      return existingUser;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Get user by ID
  const fetchUser = async (userId) => {
    try {
      setLoading(true);
      setError(null);

      const userData = await getUser(userId);
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const modifyUser = async (userId, updatedData) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      const updatedUser = await updateUser(userId, updatedData);
      setUser(updatedUser);
      setActionSuccess(true);
      return updatedUser;
    } catch (err) {
      setActionError(err.message);
      return null;
    } finally {
      setActionLoading(false);
    }
  };

  // Reset all status flags
  const resetStatus = () => {
    setActionError(null);
    setActionSuccess(false);
    setError(null);
  };

  return {
    // User data
    user,
    loading,
    error,

    // Actions
    createUser,
    verifyUser,
    fetchUser,
    modifyUser,

    // Action states
    actionLoading,
    actionError,
    actionSuccess,

    // Status reset
    resetStatus,

    // Setter for local state updates
    setUser,
  };
};
