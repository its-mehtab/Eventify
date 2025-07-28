import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import Category from "./pages/category/Category";
import "./index.css";
import EventDetails from "./pages/event-details/EventDetails.jsx";
import TermsAndConditions from "./pages/terms-and-condition/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy.jsx";
import InterestedEvents from "./pages/interested-events/InterestedEvents.jsx";
import Bookings from "./pages/bookings/Bookings.jsx";
import { TicketQuantityProvider } from "./context/TicketQuantityContext.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import ThankYou from "./pages/thank-you/ThankYou.jsx";
import Cart from "./pages/cart/Cart.jsx";
import { CartTotalProvider } from "./context/cartTotal.jsx";
import BookingDetails from "./pages/booking-details/BookingDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { CartItemsProvider } from "./context/CartItems.jsx";
import { InterestedItemsProvider } from "./context/InterestedItems.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/login/SignUp.jsx";
import RessetPassword from "./pages/login/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path: "events/:eventId",
        element: <EventDetails />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "interested",
        element: <InterestedEvents />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "booking/:bookingId",
        element: <BookingDetails />,
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "forgot",
        element: <RessetPassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InterestedItemsProvider>
      <CartItemsProvider>
        <CartTotalProvider>
          <TicketQuantityProvider>
            <RouterProvider router={router} />
          </TicketQuantityProvider>
        </CartTotalProvider>
      </CartItemsProvider>
    </InterestedItemsProvider>
  </StrictMode>
);
