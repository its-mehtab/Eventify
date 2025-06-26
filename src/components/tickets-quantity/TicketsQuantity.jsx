import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useTicketQuantity } from "../../context/TicketQuantityContext";

const TicketsQuantity = ({ color = "" }) => {
  const [quantity, setQuantity] = useState(1);

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
      <button onClick={handleMinus}>
        <assets.Minus />
      </button>
      <input className={color} type="number" value={quantity} readOnly />
      <button onClick={handlePlus}>
        <assets.Plus />
      </button>
    </div>
  );
};

export default TicketsQuantity;
