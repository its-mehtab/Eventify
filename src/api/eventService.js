import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

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

// Get all Interested events
export const getAllInterestedEvents = async () => {
  try {
    const response = await api.get("/interested");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch interested events"
    );
  }
};

// Delete Interested event
export const deleteInterestedEvent = async (id) => {
  try {
    const response = await api.delete(`/interested/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete interested event"
    );
  }
};
