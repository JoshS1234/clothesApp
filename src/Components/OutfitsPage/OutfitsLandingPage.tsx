import React from "react";
import "./OutfitsLandingPage.scss";
import { Link } from "react-router-dom";

const OutfitsLandingPage = () => {
  return (
    <div className="outfitsContainer">
      <Link to="/outfits/myOutfits" className="outfitsPageButton">
        My outfits
      </Link>
      <Link to="/outfits/myClothingItems" className="outfitsPageButton">
        My clothing items
      </Link>
      <Link to="/outfits/laundry" className="outfitsPageButton">
        Laundry completed!
      </Link>
    </div>
  );
};

export default OutfitsLandingPage;
