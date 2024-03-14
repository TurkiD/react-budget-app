import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/budget-app">Budget-App</Link>
    </nav>
  );
}

export default Navbar;
