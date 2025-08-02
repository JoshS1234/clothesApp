import React from "react";
import "./HeaderBar.scss";

const HeaderBar = () => {
  return (
    <div className="headerBarContainer">
      <h1 className="appTitle">clothesApp</h1>
      <img
        className="appLogo"
        src="https://static.vecteezy.com/system/resources/previews/034/995/152/non_2x/dress-and-suit-icon-illustration-design-vector.jpg"
      />
    </div>
  );
};

export default HeaderBar;
