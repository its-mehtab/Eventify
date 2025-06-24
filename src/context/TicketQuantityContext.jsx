import { createContext, useState, useContext } from "react";

const TicketQuantityContext = createContext();

export const TicketQuantityProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <TicketQuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </TicketQuantityContext.Provider>
  );
};

export const useTicketQuantity = () => {
  return useContext(TicketQuantityContext);
};
