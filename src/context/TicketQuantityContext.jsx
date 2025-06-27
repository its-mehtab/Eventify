import { createContext, useState, useContext } from "react";

const TicketQuantityContext = createContext();

export const TicketQuantityProvider = ({ children }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  return (
    <TicketQuantityContext.Provider
      value={{ ticketQuantity, setTicketQuantity }}
    >
      {children}
    </TicketQuantityContext.Provider>
  );
};

export const useTicketQuantity = () => {
  return useContext(TicketQuantityContext);
};
