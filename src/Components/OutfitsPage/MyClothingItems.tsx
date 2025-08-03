import React from "react";
import "./MyClothingItems.scss";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

type FormalityObject = {
  isFormal: boolean;
  isSmart: boolean;
  isCasual: boolean;
  isSportswear: boolean;
  isLeisureWear: boolean;
  isNightwear: boolean;
  isWorkwear: boolean;
};

type ClothingItem = {
  id: string;
  name: string;
  whereWorn: string;
  description: string;
  brand: string;
  formality: FormalityObject;
  isInLaundry: boolean;
  picture: string;
  isWaterproof: boolean;
  colour: string;
};

const clothesList: Array<ClothingItem> = [
  {
    id: uuidv4(),
    name: "White tunic",
    whereWorn: "topLayer1",
    description: "light coloured tunic-style top",
    brand: "ASOS",
    formality: {
      isFormal: false,
      isSmart: true,
      isCasual: true,
      isSportswear: false,
      isLeisureWear: false,
      isNightwear: false,
      isWorkwear: false,
    },
    isInLaundry: false,
    picture:
      "//img.ltwebstatic.com/v4/j/spmp/2025/04/29/68/1745918294ee37bb6f5925a3858e2d3b1030ed6212_thumbnail_900x.webp",
    isWaterproof: false,
    colour: "cream",
  },
  {
    id: uuidv4(),
    name: "Brown tunic",
    whereWorn: "topLayer1",
    description: "light coloured tunic-style top",
    brand: "ASOS",
    formality: {
      isFormal: false,
      isSmart: true,
      isCasual: true,
      isSportswear: false,
      isLeisureWear: false,
      isNightwear: false,
      isWorkwear: false,
    },
    isInLaundry: false,
    picture:
      "https://i.etsystatic.com/60378154/r/il/8bf8ce/7058690891/il_300x300.7058690891_99uk.jpg",
    isWaterproof: false,
    colour: "dark brown",
  },
  {
    id: uuidv4(),
    name: "Green tunic",
    whereWorn: "topLayer1",
    description: "light coloured tunic-style top",
    brand: "ASOS",
    formality: {
      isFormal: false,
      isSmart: true,
      isCasual: true,
      isSportswear: false,
      isLeisureWear: false,
      isNightwear: false,
      isWorkwear: false,
    },
    isInLaundry: false,
    picture:
      "data:image/webp;base64,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",
    isWaterproof: false,
    colour: "cream",
  },
  {
    id: uuidv4(),
    name: "Green kilt",
    whereWorn: "legwear",
    description: "light coloured tunic-style top",
    brand: "ASOS",
    formality: {
      isFormal: false,
      isSmart: true,
      isCasual: true,
      isSportswear: false,
      isLeisureWear: false,
      isNightwear: false,
      isWorkwear: false,
    },
    isInLaundry: false,
    picture:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdF4iRXwk2j3U4CEuVSvzI2PbAKA9VO_0q1n3FhGQwOOm5gt461iC_PSykn-ZCoqVR7DaPIcHfjaR05zISXO3YnFST0ndmJCmD7CJ6A_ikWqkH41unb3mGj8svadiwidyOV5eXTN4&usqp=CAc",
    isWaterproof: false,
    colour: "dark brown",
  },
];

const MyClothingItems = () => {
  return (
    <div className="clothingCardContainer">
      {clothesList.map((clothes) => {
        return (
          <div className="clothingItemCard">
            <div className="clothingItemCard_infoContainer">
              <h2 className="clothingItemCard_clothingItemTitle">
                {clothes.name}
              </h2>
              <h5 className="clothingItemCard_clothingItemInfo">
                {clothes.brand}
              </h5>
              <h5 className="clothingItemCard_clothingItemInfo">
                ID: {clothes.id.slice(0, 5)}
              </h5>
            </div>

            <img
              src={clothes.picture}
              className="clothingItemCard_clothingItemImage"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyClothingItems;
