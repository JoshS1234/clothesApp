import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <button className="navButton">
        <Link to="/">Home</Link>
      </button>
      <button className="navButton">
        <Link to="/outfits">Outfits</Link>
      </button>
      <button className="navButton">
        <Link to="/user">User</Link>
      </button>
    </div>
  );
};

export default Nav;
