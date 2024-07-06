import React, { act } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const active = { color: "green" };
  const notActive = { color: "red" };
  return (
    <div>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? active : notActive)}
          to="/"
        >
          Home
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? active : notActive)}
          to="/contact"
        >
          Contact
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? active : notActive)}
          to="/listtodo"
        >
          listTodo
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => (isActive ? active : notActive)}
          to="/common"
        >
          Common
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
