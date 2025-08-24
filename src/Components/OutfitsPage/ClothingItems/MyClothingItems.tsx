import React from "react";
import "./MyClothingItems.scss";
import { mockClothesList } from "../../../assets/mockData/mockClothesList";
import { Link } from "react-router-dom";

const MyClothingItems = () => {
  return (
    <div className="clothingCardContainer">
      <Link to={`/outfits/myClothingItems/add`} className="generalUseButton">
        Add more...
      </Link>
      {mockClothesList.map((clothing) => {
        return (
          <div className="clothingItemCard">
            <h4 className="clothingItemCard_clothingItemTitle">
              {clothing.name} - {clothing.brand}
            </h4>
            <img
              src={clothing.pictureUrl}
              className="clothingItemCard_clothingItemImage"
            />
            <div className="clothingItemCard_buttonContainer">
              <button>
                <Link to={`/outfits/myClothingItems/${clothing.id}/view`}>
                  View
                </Link>
              </button>
              <button>
                <Link to={`/outfits/myClothingItems/${clothing.id}/edit`}>
                  Edit
                </Link>
              </button>
              <button>
                <Link to={`/outfits/myClothingItems/${clothing.id}/delete`}>
                  Delete
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyClothingItems;
