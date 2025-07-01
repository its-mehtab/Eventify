import { getEventById } from "./eventService";
import { api } from "./apiService";

export const getUserBookings = async (userId = "guest") => {
  try {
    const response = await api.get("/bookings", {
      params: { userId },
    });

    const bookingPromises = response.data.map(async (booking) => {
      const enrichedTickets = await Promise.all(
        booking.tickets.map(async (ticket) => {
          const event = await getEventById(ticket.eventId);

          return { ...ticket, event };
        })
      );

      return { ...booking, tickets: enrichedTickets };
    });

    return Promise.all(bookingPromises);
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch bookings"
    );
  }
};

export const addBooking = async (booking) => {
  try {
    const response = await api.post("/bookings", {
      ...booking,
      createdAt: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create booking"
    );
  }
};

export const getBookingById = async (bookingId) => {
  try {
    const response = await api.get(`/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get booking");
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const response = await api.patch(`/bookings/${bookingId}`, {
      cancelled: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update booking"
    );
  }
};
