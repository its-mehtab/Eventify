import axios from "axios";
import { api } from "./apiService";

// Get all events
export const getAllEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch events");
  }
};

// Get event by ID
export const getEventById = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Event not found");
  }
};

// Get events by type
export const getEventsByType = async (type) => {
  try {
    const response = await api.get("/events", { params: { type } });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch events by type"
    );
  }
};

// Search events
export const searchEvents = async (query) => {
  try {
    const response = await api.get("/events", { params: { q: query } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Search failed");
  }
};
