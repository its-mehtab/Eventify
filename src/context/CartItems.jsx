import { createContext, useState, useContext, useEffect } from "react";
import { useCartEvent } from "../hooks/useCart";
import { useUser } from "./User";

const CartItemsContext = createContext();

export const CartItemsProvider = ({ children }) => {
  const { cartEvents } = useCartEvent();
  const { user } = useUser();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      setCartItems(cartEvents);
    } else {
      setCartItems([]);
    }
  }, [cartEvents, user]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItems = () => {
  return useContext(CartItemsContext);
};
