import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Services.css";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import BusinessIcon from "@material-ui/icons/Business";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

function Services() {
  const tabItems = [
    {
      title: "Earn",
      url: "/earn",
      icon: <SignalCellularAltIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Ride",
      url: "/ride",
      icon: <DriveEtaIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Eat",
      url: "/eat",
      icon: <RestaurantIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Business",
      url: "/business",
      icon: <BusinessIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Freight",
      url: "/freight",
      icon: <LocalShippingIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Transit",
      url: "/transit",
      icon: <DirectionsBusIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Bike & Scoot",
      url: "/bikescoot",
      icon: <MotorcycleIcon style={{ fontSize: 30 }} />,
    },
    {
      title: "Elevate",
      url: "/elevate",
      icon: <FlightTakeoffIcon style={{ fontSize: 30 }} />,
    },
  ];

  const [selectedService, setSelectedService] = useState("Earn");

  const servicesContent = (selectedService) => {
    console.log(selectedService);
    if (selectedService === "Earn") {
      return (
        <>
          <h1>Get in the driver's seat and get paid</h1>
          <p>
            Drive on the platform with the largest network of active riders.
          </p>
          <button className="signUpToDriveButton">Sign up to drive</button>
          <br />
          <Router>
            <Link to="/drive">Learn more about driving and delivering</Link>
          </Router>
        </>
      );
    } else if (selectedService === "Ride") {
      return (
        <>
          <h1>Request a ride now</h1>
          <input className="sourceInput" placeholder="Enter pickup location" />
          <br />
          <input className="destinationInput" placeholder="Enter destination" />
          <br />
          <button className="requestNowButton">Request now</button>
          <button className="scheduleForLaterButton">Schedule for later</button>
        </>
      );
    } else if (selectedService === "Eat") {
      return (
        <>
          <h1>Discover delicious eats</h1>
          <p>Order delivery from restaurants you love.</p>
          <button className="orderNowButton">Order now</button>
          <br />
          <Router>
            <Link to="/restaurant/signup">
              Own a restaurant? Partner with Uber Eats
            </Link>
          </Router>
        </>
      );
    } else if (selectedService === "Freight") {
      return (
        <>
          <h1>A new direction for freight</h1>
          <p>
            Greater transparency for shippers and carriers to do business
            together.
          </p>
          <button className="getShipperDetailsButton">
            Get shipper details
          </button>
          <br />
          <Router>
            <Link to="/freight/carrier">Sign up to be a carrier</Link>
          </Router>
        </>
      );
    } else if (selectedService === "Business") {
      return (
        <>
          <h1>Move your teams and employees</h1>
          <p>
            Uber for Business helps to simplify business travel, expensing, and
            customer experiences.
          </p>
          <button className="learnMoreButton">Learn more</button>
        </>
      );
    } else if (selectedService === "Transit") {
      return (
        <>
          <h1>Empowering public transportation</h1>
          <p>
            Uber’s software and transit solutions help local agencies build the
            best ways to move their communities forward.
          </p>
          <button className="learnMoreButton">Learn more</button>
        </>
      );
    } else if (selectedService === "Bike & Scoot") {
      return (
        <>
          <h1>Bike or scoot there</h1>
          <p>Go farther and have more fun with electric bikes and scooters.</p>
          <button className="getARideButton">Get a ride</button>
        </>
      );
    } else if (selectedService === "Elevate") {
      return (
        <>
          <h1>Ridesharing at new heights</h1>
          <p>
            Building the future of transportation with urban aerial ridesharing.
          </p>
          <button className="learnMoreButton">Learn more</button>
        </>
      );
    }
  };

  return (
    <div className="services__container">
      <div className="services__innerContainer">
        <div className="services__tabList">
          <ul>
            {tabItems.map((item) => (
              <li onClick={() => setSelectedService(item.title)}>
                {item.icon}
                <br />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="services__content">
          {servicesContent(selectedService)}
        </div>
      </div>
    </div>
  );
}

export default Services;
