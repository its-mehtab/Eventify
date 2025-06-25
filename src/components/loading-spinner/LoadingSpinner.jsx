import React from "react";
import "./loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <>
      <section className="main-loader">
        <div className="loader-wrap">
          <div className="">
            <h1>Loading...</h1>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadingSpinner;
