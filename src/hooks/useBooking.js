import { useEffect, useState, useCallback } from "react";
import {
  getUserBookings,
  addBooking,
  getBookingById,
  cancelBooking,
} from "../api/bookingService.js";

export const useBookings = (userId = "guest") => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserBookings(userId);
      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const createBooking = async (bookingData) => {
    try {
      const newBooking = await addBooking(bookingData);
      await fetchBookings();
      return newBooking;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const cancelUserBooking = async (bookingId) => {
    try {
      const updated = await cancelBooking(bookingId);
      await fetchBookings();
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const getSingleBooking = async (bookingId) => {
    try {
      return await getBookingById(bookingId);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    bookings,
    loading,
    error,
    refetch: fetchBookings,
    createBooking,
    cancelUserBooking,
    getSingleBooking,
  };
};
