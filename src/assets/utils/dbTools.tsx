import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { ClothingItem } from "../types/types";
import { db } from "../../../firebaseSetup";

const docRef = doc(db, "clothingItems", "testUser");

export const getClothingItemsFromDB = () => {
  return getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data().clothing;
      return data;
    }
  });
};

export const addToDB = (clothingItem: ClothingItem) => {
  return getClothingItemsFromDB().then((data) => {
    data.push(clothingItem);
    updateDoc(docRef, { clothing: data });
  });
};

export const deleteFromDB = (clothingItem: ClothingItem) => {
  getClothingItemsFromDB().then((data) => {
    data = data.filter((clothingItemFromList: ClothingItem) => {
      return clothingItemFromList.id != clothingItem.id;
    });

    updateDoc(docRef, { clothing: data });
  });
};
