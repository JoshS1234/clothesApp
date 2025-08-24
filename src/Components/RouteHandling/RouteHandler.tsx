import React from "react";
import "./RouteHandler.scss";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import NoPage from "../NoPage";
import OutfitsLandingPage from "../OutfitsPage/OutfitsLandingPage";
import UserPage from "../UserPage";
import MyOutfits from "../OutfitsPage/MyOutfits";
import MyClothingItems from "../OutfitsPage/ClothingItems/MyClothingItems";
import Laundry from "../OutfitsPage/Laundry";
import SpecificClothingItem from "../OutfitsPage/ClothingItems/SpecificClothingItem";
import EditSpecificClothingItem from "../OutfitsPage/ClothingItems/EditSpecificClothingItem";
import DeleteSpecificClothingItem from "../OutfitsPage/ClothingItems/DeleteSpecificClothingItem";
import AddNewClothingItem from "../OutfitsPage/ClothingItems/AddNewClothingItem";

const RouteHandler = () => {
  return (
    <div className="contentContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/outfits" element={<OutfitsLandingPage />} />
        <Route path="/outfits/myOutfits" element={<MyOutfits />} />
        <Route path="/outfits/myClothingItems" element={<MyClothingItems />} />
        <Route
          path="/outfits/myClothingItems/:clothingId/view"
          element={<SpecificClothingItem />}
        />
        <Route
          path="/outfits/myClothingItems/:clothingId/edit"
          element={<EditSpecificClothingItem />}
        />
        <Route
          path="/outfits/myClothingItems/:clothingId/delete"
          element={<DeleteSpecificClothingItem />}
        />
        <Route
          path="/outfits/myClothingItems/add"
          element={<AddNewClothingItem />}
        />
        <Route path="/outfits/laundry" element={<Laundry />} />

        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default RouteHandler;
