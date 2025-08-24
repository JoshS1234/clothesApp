import type { ClothingItem, FormalityObject } from "../types/types";
import { v4 as uuidv4 } from "uuid";

export const generateNewBlankClothingItem: () => ClothingItem = () => {
  return {
    id: uuidv4(),
    name: "",
    placement: "Head",
    description: "",
    brand: "",
    formality: {
      isFormal: false,
      isSmart: false,
      isCasual: false,
      isSportswear: false,
      isLeisureWear: false,
      isNightwear: false,
      isWorkwear: false,
    },
    isInLaundry: false,
    pictureUrl: "",
    isWaterproof: false,
    color: "Black",
  };
};

export const formalityMapping = {
  Suit: "Formal",
  Smart: "Smart",
  Casual: "Casual",
  Sportswear: "Sportswear",
  Leisurewear: "Leisurewear",
  Nightwear: "Nightwear",
  Workwear: "Workwear",
};

export const createFormalityObject: (arg2: String) => FormalityObject = (
  formality: String
) => {
  const clothingItemFormalityObj = generateNewBlankClothingItem().formality;
  switch (formality) {
    case "Formal":
      clothingItemFormalityObj.isFormal = true;
      break;
    case "Smart":
      clothingItemFormalityObj.isSmart = true;
      break;
    case "Casual":
      clothingItemFormalityObj.isCasual = true;
      break;
    case "Sportswear":
      clothingItemFormalityObj.isSportswear = true;
      break;
    case "Leisurewear":
      clothingItemFormalityObj.isLeisureWear = true;
      break;
    case "Nightwear":
      clothingItemFormalityObj.isNightwear = true;
      break;
    case "Workwear":
      clothingItemFormalityObj.isWorkwear = true;
      break;
  }
  return clothingItemFormalityObj;
};
