type FormalityObject = {
  isFormal: boolean;
  isSmart: boolean;
  isCasual: boolean;
  isSportswear: boolean;
  isLeisureWear: boolean;
  isNightwear: boolean;
  isWorkwear: boolean;
};

export type ClothingItem = {
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
