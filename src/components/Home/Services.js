import React from "react";
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
  return (
    <div className="services__container">
      <div className="services__innerContainer">
        <div className="services__tabList">
          <ul>
            {tabItems.map((item) => (
              <li>
                {item.icon}
                <br />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="services__content">
          <h1>Get in the driver's seat and get paid</h1>
          <p>
            Drive on the platform with the largest network of active riders.
          </p>
          <button className="signUpToDriveButton">Sign up to drive</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
