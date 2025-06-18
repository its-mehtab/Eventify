import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import "./event-details.css";
import Button from "../../components/button/Button";

import JSON from "../home/JSON";

const EventDetails = () => {
  const { eventId } = useParams();

  const eventData = JSON.concerts.find((currData) => {
    return currData.id === eventId;
  });

  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>{eventData.heading}</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={`/${eventData.type}`}>{eventData.type}</Link>
                </li>
                <li>{eventData.heading}</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <div className="event-details-sec sp-tb about-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="event-details-item">
                <div className="event-details-img">
                  <img src={eventData.image} alt="" width="100%" />
                </div>
                <h4>About The Event</h4>
                <p>{eventData.description}</p>
                <div className="event-host-details">
                  <img src={eventData.image} alt="" />
                  <h5>{eventData.artist}</h5>
                  <p>{eventData.artistType}</p>
                  <p>{eventData.artistBio}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-details-item event-details-right mt-4 mt-md-0">
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.CalenderIcon />
                  <p className="ms-1">{eventData.date}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.ClockIcon color="#fff" />
                  <p className="ms-1">{`${eventData.timing.start} - ${eventData.timing.end}`}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.DurationIcon />
                  <p className="ms-1">{eventData.type}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.LimitIcon />
                  <p className="ms-1">{eventData.ageLimit}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.LanguageIcon />
                  <p className="ms-1">{eventData.language}</p>
                </div>
                <div className="d-flex align-items-start gap-2 mt-2 pt-1">
                  <assets.LocationIcon color="#fff" />
                  <p className="ms-1">{eventData.location}</p>
                </div>
                <div className="price-wrap">
                  <h5>₹799</h5>
                  <Button>buy now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
