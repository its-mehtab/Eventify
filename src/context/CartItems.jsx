import { createContext, useState, useContext, useEffect } from "react";
import { useCartEvent } from "../hooks/useCart";

const CartItemsContext = createContext();

export const CartItemsProvider = ({ children }) => {
  const { cartEvents } = useCartEvent();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartEvents);
  }, [cartEvents]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItems = () => {
  return useContext(CartItemsContext);
};
