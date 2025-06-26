import { useState, useEffect } from "react";
import {
  getUserCartEvents,
  addToCart,
  deleteCartEvent,
  toggleCart,
  checkIfCart,
} from "../api/cartService.js";

export const useCartEvent = () => {
  // State for Cart events list
  const [cartEvents, setCartEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for individual actions
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [actionSuccess, setActionSuccess] = useState(false);

  // Fetch all Cart events
  const fetchCartEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUserCartEvents();
      setCartEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if a specific event is Cart
  const checkCartStatus = async (eventId) => {
    try {
      const result = await checkIfCart(eventId);
      return !!result;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Add to Cart list
  const addCart = async (eventId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await addToCart(eventId);
      setActionSuccess(true);
      await fetchCartEvents(); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Remove from Cart list
  const removeCart = async (CartId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await deleteCartEvent(CartId);
      setActionSuccess(true);
      await fetchCartEvents(); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Toggle Cart status
  const handleToggleCart = async (eventId) => {
    try {
      setActionLoading(true);
      await toggleCart(eventId);
      await fetchCartEvents(); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Initialize with Cart events
  useEffect(() => {
    fetchCartEvents();
  }, []);

  return {
    // List related
    cartEvents,
    loading,
    error,
    fetchCartEvents,

    // Individual action related
    addCart,
    removeCart,
    toggleCart: handleToggleCart,
    checkCartStatus,
    actionLoading,
    actionError,
    actionSuccess,

    // Status reset
    resetStatus: () => {
      setActionError(null);
      setActionSuccess(false);
    },
  };
};
