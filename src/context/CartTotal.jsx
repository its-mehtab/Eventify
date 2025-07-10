import { createContext, useState, useContext, useEffect } from "react";
import { useCartItems } from "./CartItems";

const CartTotalContext = createContext();

export const CartTotalProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);

  const { cartItems } = useCartItems();

  useEffect(() => {
    const cartAllPrice = cartItems.reduce((acc, currCart) => {
      const cartFullPrice =
        parseInt(currCart.price) * parseInt(currCart.quantity);
      return parseInt(acc) + cartFullPrice;
    }, 0);

    setCartTotal(cartAllPrice);
  }, [cartItems]);

  return (
    <CartTotalContext.Provider value={{ cartTotal, setCartTotal }}>
      {children}
    </CartTotalContext.Provider>
  );
};

export const useCartTotal = () => {
  return useContext(CartTotalContext);
};
