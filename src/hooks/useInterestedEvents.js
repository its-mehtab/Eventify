import { useState, useEffect } from "react";
import {
  getUserInterestedEvents,
  addToInterested,
  deleteInterestedEvent,
  toggleInterest,
  checkIfInterested,
} from "../api/interestService.js";

export const useEventInterest = () => {
  // State for interested events list
  const [interestedEvents, setInterestedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for individual actions
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState(null);
  const [actionSuccess, setActionSuccess] = useState(false);

  // Fetch all interested events
  const fetchInterestedEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUserInterestedEvents();
      setInterestedEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if a specific event is interested
  const checkInterestStatus = async (eventId) => {
    try {
      const result = await checkIfInterested(eventId);
      return !!result;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Add to interested list
  const addInterest = async (eventId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await addToInterested(eventId);
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

  // Remove from interested list
  const removeInterest = async (interestId) => {
    try {
      setActionLoading(true);
      setActionError(null);
      setActionSuccess(false);

      await deleteInterestedEvent(interestId);
      setActionSuccess(true);
      // await fetchInterestedEvents(); // Refresh the list
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  // Toggle interest status
  const handleToggleInterest = async (eventId) => {
    try {
      setActionLoading(true);
      await toggleInterest(eventId);
      await fetchInterestedEvents(); // Refresh the list
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
    interestedEvents,
    loading,
    error,
    fetchInterestedEvents,

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
