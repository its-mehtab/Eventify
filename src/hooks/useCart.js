import { useState, useEffect } from "react";
import {
  getUserCartEvents,
  addToCart,
  deleteCartEvent,
  checkIfCart,
  updateCartQuantity,
  getCart,
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

      return result;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Get a specific event is Cart
  const getCartById = async (eventId, quantity) => {
    try {
      const result = await getCart(eventId, quantity);

      return result;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Add to Cart list
  const addCart = async (eventId, quantity) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await addToCart(eventId, quantity);
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

  const updateCart = async (cartId, newQuantity) => {
    try {
      setActionLoading(true);
      await updateCartQuantity(cartId, newQuantity);
      await fetchCartEvents();
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
    updateCart,
    checkCartStatus,
    getCartById,
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
