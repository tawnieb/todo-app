import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>ToDo App</h1>
    <NavLink to="/" activeClassName="is-active">
      HomePage
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
