import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> Home</Link>
      <Link to="/properties"> Properties</Link>
      <Link to="/addProperty"> Add A New Property</Link>
    </div>
  );
}

export default Navbar;
