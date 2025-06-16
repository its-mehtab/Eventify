import React from "react";
import Button from "../../../../components/button/Button";
import { assets } from "../../../../assets/assets";
import "./banner-section.css";

function BannerSection({ children }) {
  return (
    <section className="banner-sec">
      <div className="container">{children}</div>
    </section>
  );
}

export default BannerSection;
