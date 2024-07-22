import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return <div className="navbar">{/*{code here}*/}
  <NavLink to='movies' exact>
    Movies
  </NavLink>
  <NavLink to='directors' exact>
    Directors
  </NavLink>
  <NavLink to='/actors' exact>
  Actors

  </NavLink>
  <NavLink to='/' exact>
  Home

  </NavLink>
  </div>;
}

export default NavBar;
