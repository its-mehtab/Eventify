import React, { useLayoutEffect, useRef, useState } from "react";
import "./header.css";
import { assets } from "../../assets/assets";

function Header() {
  const [isPageActive, setIsPageActive] = useState("home");
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (!headerRef.current) return;

    const header = headerRef.current;
    const elTopOffset = header.offsetTop;
    const elHeight = header.offsetHeight;

    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Immediately check position in case user reloads mid-scroll
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${sticky.isSticky ? "fixed-header" : ""}`}
      ref={headerRef}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={assets.logo} alt="Eventify Logo" width={180} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      isPageActive === "home" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      isPageActive === "events" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      isPageActive === "standup" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Stand up
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      isPageActive === "sports" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      isPageActive === "contactus" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <a href="#" className="btn btn-outline-success" type="submit">
                  BUY TICKET NOW
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
