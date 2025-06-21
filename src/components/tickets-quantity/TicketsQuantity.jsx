import React, { useState } from "react";
import { assets } from "../../assets/assets";

const TicketsQuantity = () => {
  const [quantiyInput, setQuantityInput] = useState(1);

  function handleMinus() {
    if (quantiyInput > 1) {
      setQuantityInput((prev) => prev - 1);
    }
  }
  function handlePlus() {
    if (quantiyInput < 10) {
      setQuantityInput((prev) => prev + 1);
    }
  }

  return (
    <div className="qty-wrap">
      <span onClick={handleMinus}>
        <assets.Minus />
      </span>
      <input type="number" value={quantiyInput} readOnly />
      <span onClick={handlePlus}>
        <assets.Plus />
      </span>
    </div>
  );
};

export default TicketsQuantity;
