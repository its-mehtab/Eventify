import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./home.css";
import { assets } from "../../assets/assets";
import EventCard from "../../components/event-card/EventCard";
import VerticalCard from "../../components/vertical-card/VerticalCard";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <section className="banner-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="banner-content text-center">
                <div className="common-head">
                  <span>Live Entertainment Hub</span>
                  <h1>
                    book your <br />
                    tickets for <span>event</span>
                  </h1>
                </div>
                <p className="mt-3 mb-4">
                  Experience live entertainment with fast, easy, and secure
                  ticket booking.
                </p>
                <div className="d-flex justify-content-center">
                  <Button>Grab Your Ticket</Button>
                  <Button BtnClass={"btn-white ms-3"}>Join Now</Button>
                  {/* <a href="#" className="primary-btn ">
                    Join Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-event">
          <div className="row">
            <div className="col-md-4">
              <div className="upcoming-event-item">
                <h3>25th DEC</h3>
                <p>22:30 - 07:00</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-event-item">
                <h3>22:30 - 07:00</h3>
                <p>135 W, 46nd Street, New York</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="upcoming-event-item d-flex gap-3 align-items-center">
                <div className="">
                  <h3>353</h3>
                  <p>Attending</p>
                </div>
                <Button>
                  <svg
                    className="me-2"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.23989 10.644C12.1969 10.6439 13.2609 7.68308 13.5394 5.251C13.8825 2.25493 12.4657 0 9.23989 0C6.01447 0 4.59693 2.25476 4.94031 5.251C5.21911 7.68308 6.28277 10.6443 9.23989 10.644Z"
                      fill="white"
                    />
                    <path
                      d="M15.7059 11.8765C15.8011 11.8765 15.8956 11.8794 15.9895 11.8846C15.8488 11.6839 15.6859 11.5068 15.4953 11.3645C14.9271 10.9404 14.1912 10.8013 13.5406 10.5456C13.2239 10.4212 12.9404 10.2977 12.6742 10.157C11.7757 11.1423 10.6041 11.6577 9.23967 11.6579C7.87573 11.6579 6.70419 11.1424 5.80582 10.157C5.53962 10.2977 5.25598 10.4212 4.93937 10.5456C4.28881 10.8013 3.55296 10.9404 2.98472 11.3645C2.00205 12.0979 1.74809 13.7479 1.54855 14.8734C1.38388 15.8025 1.27326 16.7506 1.24097 17.6943C1.21595 18.4253 1.57686 18.5278 2.1884 18.7485C2.95411 19.0246 3.74474 19.2296 4.54068 19.3977C6.07783 19.7223 7.6623 19.9717 9.23994 19.9829C10.0044 19.9774 10.7704 19.9158 11.5318 19.8171C10.968 19.0001 10.6373 18.0106 10.6373 16.9452C10.6374 14.1503 12.9111 11.8765 15.7059 11.8765Z"
                      fill="white"
                    />
                    <path
                      d="M15.706 12.8903C13.4666 12.8903 11.6511 14.7058 11.6511 16.9451C11.6511 19.1845 13.4666 21 15.706 21C17.9454 21 19.7609 19.1845 19.7609 16.9451C19.7609 14.7057 17.9454 12.8903 15.706 12.8903ZM17.48 17.6408H16.4017V18.7191C16.4017 19.1033 16.0903 19.4148 15.706 19.4148C15.3218 19.4148 15.0103 19.1033 15.0103 18.7191V17.6408H13.932C13.5478 17.6408 13.2363 17.3294 13.2363 16.9451C13.2363 16.5608 13.5477 16.2493 13.932 16.2493H15.0103V15.1711C15.0103 14.7868 15.3218 14.4753 15.706 14.4753C16.0903 14.4753 16.4017 14.7868 16.4017 15.1711V16.2493H17.48C17.8643 16.2493 18.1758 16.5608 18.1758 16.9451C18.1757 17.3294 17.8643 17.6408 17.48 17.6408Z"
                      fill="white"
                    />
                  </svg>
                  Interested
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-sec sp-tb">
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-md-5">
              <div className="about-item">
                <img src={assets.about_img} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-item">
                <div className="common-head">
                  <span className="inner-head">Our Highlights</span>
                  <h1>Made for Moments</h1>
                </div>
                <p className="mb-4">
                  Discover events that inspire, educated, and connect. From
                  engaging webinars the dynamic live and conferences, our events
                  are carefully. Discover events that inspire, educated, and
                  connect. From engaging webinars the dynamic live and
                  conferences, our events are carefully.
                </p>
                <Button>Grab Your Ticket</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-sec sp-tb">
        <div className="container">
          <div className="row gx-md-5">
            <div className="col-md-4">
              <div className="events-content">
                <div className="common-head">
                  <span className="inner-head">Live Lineup</span>
                  <h1>UPCOMING EVENTS YOU CAN'T MISS</h1>
                </div>
                <p className="mb-3">
                  Experience unforgettable music with top artists performing
                  live!
                </p>
                <Button>Grab Your Ticket</Button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="events-content">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <form>
                <ul className="sports-shows">
                  <li>
                    <label htmlFor="sport_show1">
                      <input
                        defaultChecked
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show1"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="sport_show2">
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show2"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="sport_show3">
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show3"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="qty-sports-show">
                  <div className="qty-wrap">
                    <span>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16675 10.5H15.8334"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <input type="number" value={1} readOnly />
                    <span>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0001 4.66666V16.3333M4.16675 10.5H15.8334"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <Button>
                    <svg
                      className="me-1"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_72_135)">
                        <mask
                          id="mask0_72_135"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="25"
                          height="25"
                        >
                          <path d="M25 0H0V25H25V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_72_135)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.58643 7.11145C8.18018 6.70519 8.18018 6.04582 8.58643 5.63853L10.7948 3.43019C11.2021 3.0229 11.8625 3.0229 12.2687 3.43019L21.1073 12.2677C21.5135 12.6739 21.5135 13.3344 21.1073 13.7406L18.8989 15.95C18.4916 16.3562 17.8312 16.3562 17.425 15.95C17.0187 15.5437 16.3583 15.5437 15.9521 15.95C15.5458 16.3573 15.5458 17.0177 15.9521 17.4229C16.3583 17.8292 16.3583 18.4885 15.9521 18.8958L13.7416 21.1073C13.3354 21.5135 12.675 21.5146 12.2687 21.1073L3.43018 12.2677C3.02393 11.8614 3.02393 11.2021 3.43018 10.7948L5.64059 8.5854C6.04684 8.17915 6.70726 8.17915 7.11351 8.5854C7.51976 8.99165 8.18018 8.99165 8.58643 8.5854C8.99268 8.17915 8.99268 7.51874 8.58643 7.11145ZM10.6698 6.50103C11.225 7.66249 11.0218 9.09686 10.0593 10.0594C9.09684 11.0198 7.66351 11.2229 6.50309 10.6698L5.63955 11.5323L13.0041 18.8969L13.8677 18.0344C13.3135 16.8739 13.5166 15.4406 14.4781 14.4771C15.4396 13.5156 16.8739 13.3114 18.0354 13.8667L18.8979 13.0042L11.5323 5.63957L10.6698 6.50103Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_72_135">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    buy tickets
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="about-sec sp-tb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="about-item">
                <img src={assets.about_img} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-item">
                <div className="common-head">
                  <span className="inner-head">About Us</span>
                  <h1>Your Gateway to Live Moments</h1>
                </div>
                <p className="mb-4">
                  We aim to redefine how you experience live entertainment.
                  Whether it’s a concert, sports match, or stand-up show, our
                  platform ensures easy booking, verified tickets, and
                  unforgettable memories. With a user-first approach, we focus
                  on trust, convenience, and joy—making every event feel more
                  personal, more exciting, and truly worth attending from start
                  to finish.
                </p>
                <Button>Grab Your Ticket</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stand-up-sec sp-tb">
        <div className="container">
          <div className="common-head text-center">
            <span className="inner-head">Comedy Nights</span>
            <h1>Laugh Loud at Live Shows</h1>
            <p>
              Catch the funniest comedians live on stage for unforgettable,
              laugh-out-loud moments and great vibes.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <VerticalCard />
            </div>
            <div className="col-md-4">
              <VerticalCard />
            </div>
            <div className="col-md-4">
              <VerticalCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
