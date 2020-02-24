import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>

      <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>
        About
      </NavLink>

      <NavLink className="nav-link" to="/menus" activeStyle={activeStyle}>
        Menus
      </NavLink>
    </nav>
  );
};

export default Header;
