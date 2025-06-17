import React from "react";
import Button from "../../components/button/Button";
import EventCard from "../../components/event-card/EventCard";
import { Link } from "react-router-dom";
import BannerSection from "../home/components/banner-section/BannerSection";
import EventsSection from "../home/components/events-section/EventsSection";

import JSON from "../../pages/home/JSON";

const Concert = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Buy Ticket</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>concerts</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <EventsSection className="inner-page">
        <div className="text-center mb-2">
          <div className="common-head">
            <span className="inner-head">Live Lineup</span>
            <h1>UPCOMING EVENTS YOU CAN'T MISS</h1>
            <p className="mb-3">
              Experience unforgettable music with top artists performing live!
            </p>
          </div>
        </div>
        <div className="row">
          {JSON.concerts.map((currConcert) => {
            return (
              <div className="col-xl-4 col-md-6 d-flex align-items-stretch">
                <div className="events-content mt-4">
                  <EventCard currConcert={currConcert} key={currConcert.id} />
                </div>
              </div>
            );
          })}
        </div>
      </EventsSection>
    </>
  );
};

export default Concert;
