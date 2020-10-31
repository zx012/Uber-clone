import React from "react";
import "./Navbar.css";
import logo from "../../assets/uber-logo.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Navbar() {
  const MenuItems = [
    {
      left: [
        {
          title: "Company",
          url: "/company",
        },
        {
          title: "Safety",
          url: "/safety",
        },
        {
          title: "Help",
          url: "/help",
        },
      ],
    },
    {
      right: [
        {
          title: "Login",
          url: "/login",
        },
        {
          title: "Sign Up",
          url: "/signup",
        },
      ],
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Uber Logo" />
      </div>
      <div className="navbar__items_left">
        <ul>
          {MenuItems[0].left.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="navbar__items_right">
        <ul>
          <AccountCircleIcon />
          {MenuItems[1].right.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
