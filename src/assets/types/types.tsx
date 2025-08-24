export type ClothingItem = {
  id: string;
  name: string;
  placement: Placement;
  description: string;
  brand: string;
  formality: FormalityObject;
  isInLaundry: boolean;
  pictureUrl: string;
  isWaterproof: boolean;
  color: Color;
};

export type Placement = "Head" | "Torso" | "Legs" | "Feet";

export const placementOptions: Array<Placement> = [
  "Head",
  "Torso",
  "Legs",
  "Feet",
];

export type FormalityObject = {
  isFormal: boolean;
  isSmart: boolean;
  isCasual: boolean;
  isSportswear: boolean;
  isLeisureWear: boolean;
  isNightwear: boolean;
  isWorkwear: boolean;
};

export type Formality =
  | "Formal"
  | "Smart"
  | "Casual"
  | "Sportswear"
  | "Leisurewear"
  | "Nightwear"
  | "Workwear";

export const formalityOptions: Array<Formality> = [
  "Formal",
  "Smart",
  "Casual",
  "Sportswear",
  "Leisurewear",
  "Nightwear",
  "Workwear",
];

export type Color =
  | "Black"
  | "White"
  | "Green"
  | "Red"
  | "Blue"
  | "Brown"
  | "Purple"
  | "Pink";

export const colorOptions = [
  "Black",
  "White",
  "Green",
  "Red",
  "Blue",
  "Brown",
  "Purple",
  "Pink",
];
