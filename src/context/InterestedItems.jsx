import { createContext, useState, useContext, useEffect } from "react";
import { useEventInterest } from "../hooks/useInterestedEvents";
import { useUser } from "./User";

const InterestedItemsContext = createContext();

export const InterestedItemsProvider = ({ children }) => {
  const { user } = useUser();

  const { interestedEvents } = useEventInterest();

  const [interestedItems, setInterestedItems] = useState([]);

  useEffect(() => {
    if (user) {
      setInterestedItems(interestedEvents);
    } else {
      setInterestedItems([]);
    }
  }, [interestedEvents, user]);

  return (
    <InterestedItemsContext.Provider
      value={{ interestedItems, setInterestedItems }}
    >
      {children}
    </InterestedItemsContext.Provider>
  );
};

export const useInterestedItems = () => {
  return useContext(InterestedItemsContext);
};
