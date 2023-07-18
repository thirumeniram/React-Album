import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar1">
      {/* Link to the home page */}
      <Link to="/">
        <h2>
          <span className="Nav-title">ALBUMS</span>
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
