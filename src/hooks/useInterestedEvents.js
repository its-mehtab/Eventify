import { useState, useEffect } from "react";
import {
  getUserInterestedEvents,
  addToInterested,
  deleteInterestedEvent,
  toggleInterest,
  checkIfInterested,
  getAllInterestedEvents,
} from "../api/interestService.js";

export const useEventInterest = () => {
  const [allInterested, setAllInterested] = useState([]);

  // State for interested events list
  const [interestedEvents, setInterestedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for individual actions
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [actionSuccess, setActionSuccess] = useState(false);

  const fetchAllInterestedEvents = async (eventId) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllInterestedEvents(eventId);
      setAllInterested(data.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchInterestedEvents = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUserInterestedEvents(userId);
      setInterestedEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if a specific event is interested
  const checkInterestStatus = async (eventId, userId) => {
    try {
      const result = await checkIfInterested(eventId, userId);
      return !!result;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Add to interested list
  const addInterest = async (eventId, userId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await addToInterested(eventId, userId);
      setActionSuccess(true);
      await fetchInterestedEvents(userId); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Remove from interested list
  const removeInterest = async (interestId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await deleteInterestedEvent(interestId);
      setActionSuccess(true);
      await fetchInterestedEvents(); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Toggle interest status
  const handleToggleInterest = async (eventId, userId) => {
    try {
      setActionLoading(true);
      await toggleInterest(eventId, userId);
      await fetchInterestedEvents(userId); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Initialize with interested events
  useEffect(() => {
    fetchInterestedEvents();
  }, []);

  return {
    // List related
    allInterested,
    interestedEvents,
    loading,
    error,
    fetchInterestedEvents,
    fetchAllInterestedEvents,

    // Individual action related
    addInterest,
    removeInterest,
    toggleInterest: handleToggleInterest,
    checkInterestStatus,
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
