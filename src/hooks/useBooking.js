import { useEffect, useState, useCallback } from "react";
import {
  getAllBookings,
  getUserBookings,
  addBooking,
  getBookingById,
  cancelBooking,
} from "../api/bookingService.js";
import { useUser } from "../context/User.jsx";

export const useBookings = (userId) => {
  const { user } = useUser();

  const [allBookings, setAllBookings] = useState([]);
  const [allBookingsLoading, setAllBookingsLoading] = useState(true);
  const [allBookingsError, setAllBookingsError] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllBookings = useCallback(async () => {
    setAllBookingsLoading(true);
    setAllBookingsError(null);
    try {
      const data = await getAllBookings();
      setAllBookings(data);
    } catch (err) {
      setAllBookingsError(err.message);
    } finally {
      setAllBookingsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllBookings();
  }, [fetchAllBookings]);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (user) {
        const data = await getUserBookings(userId);
        setBookings(data);
      } else {
        setBookings([]);
      }
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
    allBookings,
    allBookingsLoading,
    allBookingsError,
    bookings,
    loading,
    error,
    refetch: fetchBookings,
    createBooking,
    cancelUserBooking,
    getSingleBooking,
  };
};
