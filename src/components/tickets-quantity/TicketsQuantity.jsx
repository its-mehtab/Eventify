import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useTicketQuantity } from "../../context/TicketQuantityContext";

const TicketsQuantity = ({ color = "", onChange }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (onChange) onChange(quantity);
  }, [quantity]);

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handlePlus() {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  }

  return (
    <div className="qty-wrap">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleMinus(e);
        }}
      >
        <assets.Minus />
      </button>
      <input className={color} type="number" value={quantity} readOnly />
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePlus();
        }}
      >
        <assets.Plus />
      </button>
    </div>
  );
};

export default TicketsQuantity;
