import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import Home from "./pages/home/Home";
import Concert from "./pages/concert/Concert";
import StandUp from "./pages/stand-up/StandUp";
import Sports from "./pages/sports/Sports";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import "./index.css";
import EventDetails from "./pages/event-details/EventDetails.jsx";

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
        path: "concert",
        element: <Concert />,
      },
      {
        path: "standup",
        element: <StandUp />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "event/:eventId",
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
