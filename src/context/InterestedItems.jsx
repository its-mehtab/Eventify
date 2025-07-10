import { createContext, useState, useContext, useEffect } from "react";
import { useEventInterest } from "../hooks/useInterestedEvents";

const InterestedItemsContext = createContext();

export const InterestedItemsProvider = ({ children }) => {
  const { interestedEvents } = useEventInterest();

  const [interestedItems, setInterestedItems] = useState([]);

  useEffect(() => {
    setInterestedItems(interestedEvents);
  }, [interestedEvents]);

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
