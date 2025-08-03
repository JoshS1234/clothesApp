import React from "react";
import "./RouteHandler.scss";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import NoPage from "../NoPage";
import OutfitsLandingPage from "../OutfitsPage/OutfitsLandingPage";
import UserPage from "../UserPage";
import MyOutfits from "../OutfitsPage/MyOutfits";
import MyClothingItems from "../OutfitsPage/MyClothingItems";
import Laundry from "../OutfitsPage/Laundry";

const RouteHandler = () => {
  return (
    <div className="contentContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/outfits" element={<OutfitsLandingPage />} />
        <Route path="/outfits/myOutfits" element={<MyOutfits />} />
        <Route path="/outfits/myClothingItems" element={<MyClothingItems />} />
        <Route path="/outfits/laundry" element={<Laundry />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default RouteHandler;
