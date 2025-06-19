const API_BASE_URL = "http://localhost:3000";

// Get all events
export const getAllEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// Get event by ID
export const getEventById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/events/${id}`);
  if (!response.ok) throw new Error("Event not found");
  return response.json();
};

// Get events by type (concert, comedy, sports)
export const getEventsByType = async (type) => {
  const response = await fetch(`${API_BASE_URL}/events?type=${type}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// Search events by query (searches heading, artist, description)
export const searchEvents = async (query) => {
  const response = await fetch(`${API_BASE_URL}/events?q=${query}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
