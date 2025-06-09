import React from "react";
import { assets } from "../../assets/assets";
import "./event-card.css";

const EventCard = () => {
  return (
    <div className="concert-card">
      <img src={assets.concert_box} alt="" />
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="concert-content">
            <img src={assets.concert_1} alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="concert-content py-3">
            <div className="concert-title">
              <div>
                <h3>Voice of Emotions</h3>
                <p>May 25, 2025</p>
              </div>
            </div>
            <div className="concert-details">
              <p>
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6666 18V16.3333C16.6666 15.4493 16.3154 14.6014 15.6903 13.9763C15.0652 13.3512 14.2173 13 13.3333 13H6.66659C5.78253 13 4.93468 13.3512 4.30956 13.9763C3.68444 14.6014 3.33325 15.4493 3.33325 16.3333V18M13.3333 6.33333C13.3333 8.17428 11.8409 9.66667 9.99992 9.66667C8.15897 9.66667 6.66659 8.17428 6.66659 6.33333C6.66659 4.49238 8.15897 3 9.99992 3C11.8409 3 13.3333 4.49238 13.3333 6.33333Z"
                      stroke="#170072"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Arijit Singh – Voice of Emotions
              </p>
              <p>
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 5.49999V10.5L13.3334 12.1667M18.3334 10.5C18.3334 15.1024 14.6025 18.8333 10.0001 18.8333C5.39771 18.8333 1.66675 15.1024 1.66675 10.5C1.66675 5.89762 5.39771 2.16666 10.0001 2.16666C14.6025 2.16666 18.3334 5.89762 18.3334 10.5Z"
                      stroke="#170072"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                07:00 PM - 11:30 AM
              </p>
              <p>
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_43_325)">
                      <path
                        d="M9.99991 18.5C10.4145 18.5 10.829 18.3527 11.1634 18.0582C13.1558 16.3033 17.0086 12.406 17.0086 8.5087C17.0086 4.63788 13.8707 1.5 9.99991 1.5C6.12909 1.5 2.99121 4.63788 2.99121 8.5087C2.99121 12.406 6.84398 16.3033 8.83642 18.0583C9.17078 18.3528 9.58535 18.5 9.99991 18.5Z"
                        stroke="#170072"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0001 11.137C11.4516 11.137 12.6284 9.96024 12.6284 8.5087C12.6284 7.05715 11.4516 5.88043 10.0001 5.88043C8.54854 5.88043 7.37183 7.05715 7.37183 8.5087C7.37183 9.96024 8.54854 11.137 10.0001 11.137Z"
                        stroke="#170072"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_43_325">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Netaji Indoor Stadium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
