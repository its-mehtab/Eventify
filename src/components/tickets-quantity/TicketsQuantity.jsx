import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const TicketsQuantity = ({
  initialQuantity = 1,
  color = "",
  onChange,
  handleUpdateQuantity = () => {},
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  useEffect(() => {
    if (onChange) onChange(quantity);
  }, [quantity, onChange]);

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQty = prev - 1;
        handleUpdateQuantity(newQty);

        return newQty;
      });
    }
  }

  function handlePlus() {
    if (quantity < 10) {
      setQuantity((prev) => {
        const newQty = prev + 1;
        handleUpdateQuantity(newQty);

        return newQty;
      });
    }
  }

  return (
    <div className="qty-wrap">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleMinus();
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
