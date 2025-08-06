import { getEventById } from "./eventService";
import { api } from "./apiService";

export const getAllInterestedEvents = async (eventId) => {
  try {
    const response = await api.get("/interested", {
      params: { eventId },
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get interested events"
    );
  }
};

export const getUserInterestedEvents = async (userId) => {
  try {
    // For now using 'guest' as userId
    const response = await api.get("/interested", {
      params: { userId: userId },
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

export const addToInterested = async (eventId, userId) => {
  try {
    const response = await api.post("/interested", {
      eventId,
      userId,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to add to interested"
    );
  }
};

export const checkIfInterested = async (eventId, userId) => {
  try {
    const response = await api.get("/interested", {
      params: { eventId, userId },
    });
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to check interest status"
    );
  }
};

export const toggleInterest = async (eventId, userId) => {
  const existingInterest = await checkIfInterested(eventId, userId);
  if (existingInterest) {
    return await deleteInterestedEvent(existingInterest.id);
  } else {
    return await addToInterested(eventId, userId);
  }
};
