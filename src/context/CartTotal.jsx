import { createContext, useState, useContext, useEffect } from "react";
import { useCartEvent } from "../hooks/useCart";

const CartTotalContext = createContext();

export const CartTotalProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);

  const { cartEvents } = useCartEvent();

  useEffect(() => {
    const cartAllPrice = cartEvents.reduce((acc, currCart) => {
      const cartFullPrice =
        parseInt(currCart.price) * parseInt(currCart.quantity);
      return parseInt(acc) + cartFullPrice;
    }, 0);

    setCartTotal(cartAllPrice);
  }, [cartEvents]);

  return (
    <CartTotalContext.Provider value={{ cartTotal, setCartTotal }}>
      {children}
    </CartTotalContext.Provider>
  );
};

export const useCartTotal = () => {
  return useContext(CartTotalContext);
};
