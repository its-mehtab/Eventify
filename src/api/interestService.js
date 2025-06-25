import { getEventById } from "./eventService";
import { api } from "./apiService";

export const getUserInterestedEvents = async () => {
  try {
    // For now using 'guest' as userId
    const response = await api.get("/interested", {
      params: { userId: "guest" },
    });

    // Get full event details for each interested item
    const eventPromises = response.data.map(async (item) => {
      const event = await getEventById(item.eventId);
      return { ...event, interestId: item.id }; // Include interestId for removal
    });

    return Promise.all(eventPromises);
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get interested events"
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

export const addToInterested = async (eventId) => {
  try {
    const response = await api.post("/interested", {
      eventId,
      userId: "guest", // Temporary until auth
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to add to interested"
    );
  }
};

export const checkIfInterested = async (eventId) => {
  try {
    const response = await api.get("/interested", {
      params: { eventId },
    });
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to check interest status"
    );
  }
};

export const toggleInterest = async (eventId) => {
  const existingInterest = await checkIfInterested(eventId);
  if (existingInterest) {
    return await deleteInterestedEvent(existingInterest.id);
  } else {
    return await addToInterested(eventId);
  }
};
