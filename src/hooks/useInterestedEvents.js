import { useState, useEffect } from "react";
import {
  getAllInterestedEvents,
  deleteInterestedEvent,
} from "../api/eventService";

export const useInterestedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterestedEvents = async () => {
      try {
        setLoading(true);
        const data = await getAllInterestedEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterestedEvents();
  }, []);

  return { events, loading, error };
};

export const useDeleteInterestedEvent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteEvent = async (id) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await deleteInterestedEvent(id);
      setSuccess(true);
      return true; // Indicate success
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      return false; // Indicate failure
    } finally {
      setLoading(false);
    }
  };

  return { deleteEvent, loading, error, success };
};
