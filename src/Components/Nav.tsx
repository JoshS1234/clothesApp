import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="navButton">
        <button>Home</button>
      </Link>
      <Link to="/outfits" className="navButton">
        <button>Outfits</button>
      </Link>
      <Link to="/user" className="navButton">
        <button>User</button>
      </Link>
    </div>
  );
};

export default Nav;
