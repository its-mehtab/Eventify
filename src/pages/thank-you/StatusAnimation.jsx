import React from "react";
import Lottie from "lottie-react";
import successAnimation from "../../assets/animations/success.json";
import errorAnimation from "../../assets/animations/error.json";

const StatusAnimation = ({ isSuccess }) => {
  return (
    <div
      className={`isSuccess ? "" : "mb-4"`}
      style={{
        width: isSuccess ? 350 : 250,
        height: isSuccess ? 300 : "",
        margin: "0 auto",
      }}
    >
      <Lottie
        animationData={isSuccess ? successAnimation : errorAnimation}
        loop
        autoplay
        speed={isSuccess ? 0.5 : 1}
      />
    </div>
  );
};

export default StatusAnimation;
