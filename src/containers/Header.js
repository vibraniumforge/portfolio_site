import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className="header-div" border-color="white">
    <div className="ui secondary menu" id="navbar-header">
      <div
        className="ui labeled icon menu"
        id="menu-header"
        border-color="white"
      >
        <div className="navbar-icons" border-color="white">
          <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
            Home
          </Link>
        </div>
        <div className="navbar-icons">
          <Link to="/about" style={{ paddingLeft: 13, textDecoration: "none" }}>
            About
          </Link>
        </div>
        <div className="navbar-icons">
          <Link
            to="/projects"
            style={{ paddingLeft: 13, textDecoration: "none" }}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
