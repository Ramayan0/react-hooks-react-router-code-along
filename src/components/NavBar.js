import React from "react";
import { NavLink } from "react-router-dom";
// Add basic styling for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */

        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activestyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyles}
        activestyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}
export default NavBar;
