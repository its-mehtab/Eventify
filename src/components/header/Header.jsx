import React, { useLayoutEffect, useRef, useState } from "react";
import "./header.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useCartItems } from "../../context/CartItems";
import { useInterestedItems } from "../../context/InterestedItems";

function Header() {
  const { cartItems } = useCartItems();
  const { interestedItems } = useInterestedItems();

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
            <Link to="/" className="navbar-brand">
              <img src={assets.logo} alt="Eventify Logo" width={180} />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="category/concert"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    Concerts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="category/comedy"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    Comedy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="category/sports"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <NavLink
                    to="interested"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    interested list
                  </NavLink>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <NavLink
                    to="cart"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    cart
                  </NavLink>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <NavLink
                    to="bookings"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    bookings
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center ms-auto ms-lg-0 me-4 me-lg-0">
              <ul className="header-icons d-none d-sm-flex align-items-center gap-3 me-4">
                <li>
                  <Link to="interested" className="pe-2">
                    <assets.WishlistEventIcon />
                    <span>{interestedItems.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="cart" className="pe-2">
                    <assets.CartIcon />
                    <span>{cartItems.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="bookings">
                    <assets.BookingsIcon />
                  </Link>
                </li>
              </ul>
              <Button href="login" btnClass="btn-dark px-3 py-1">
                login
              </Button>
            </div>
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
