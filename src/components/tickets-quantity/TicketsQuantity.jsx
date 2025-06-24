import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useTicketQuantity } from "../../context/TicketQuantityContext";

const TicketsQuantity = () => {
  const { quantity, setQuantity } = useTicketQuantity();

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
      <span onClick={handleMinus}>
        <assets.Minus />
      </span>
      <input type="number" value={quantity} readOnly />
      <span onClick={handlePlus}>
        <assets.Plus />
      </span>
    </div>
  );
};

export default TicketsQuantity;
