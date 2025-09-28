import React, { use } from "react";
import "./AddNewClothingItem.scss";
import type {
  Placement,
  Color,
  ClothingItem,
} from "../../../assets/types/types";
import {
  formalityOptions,
  colorOptions,
  placementOptions,
} from "../../../assets/types/types";
import {
  generateNewBlankClothingItem,
  createFormalityObject,
} from "../../../assets/utils/outfitTools";
import { useState } from "react";
import { addToDB } from "../../../assets/utils/dbTools";

const AddNewClothingItem = () => {
  let tempClothingItem = generateNewBlankClothingItem();

  const [id, setId] = useState(tempClothingItem.id);
  const [name, setName] = useState<string>(tempClothingItem.name);
  const [PictureUrl, setPictureUrl] = useState<string>(
    tempClothingItem.pictureUrl
  );
  const [placement, setPlacement] = useState<string>(
    tempClothingItem.placement
  );
  const [description, setDescription] = useState<string>(
    tempClothingItem.description
  );
  const [brand, setBrand] = useState<string>(tempClothingItem.brand);
  //ManualSetting for these is not ideal
  const [formality, setFormality] = useState<string>("Formal");
  const [color, setColor] = useState<string>("Black");
  const [isWaterproof, setIsWaterproof] = useState<boolean>(
    tempClothingItem.isWaterproof
  );

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => {
    //add validations to prevent null/invalid text
    const clothingItemCopy = { ...tempClothingItem };
    clothingItemCopy.name = name;
    clothingItemCopy.pictureUrl = PictureUrl;
    //add error handling here
    clothingItemCopy.placement = placement as Placement;
    clothingItemCopy.description = description;
    clothingItemCopy.brand = brand;
    //Make it so more than one can be selected
    clothingItemCopy.formality = createFormalityObject(formality);
    clothingItemCopy.color = color as Color;
    clothingItemCopy.isWaterproof = isWaterproof;

    addToDB(clothingItemCopy);
    //Add functionality to link this to the finished page
    //add functionality to upload photo
    //add edit page for completed items
    //remove console logs
  };

  return (
    <div className="newClothingItemForm">
      <div className="formData">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);

            setName(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Add picture</label>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);

            setPictureUrl(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Placement</label>
        <select
          value={placement}
          onChange={(event) => {
            setPlacement(event.target.value);
          }}
        >
          {placementOptions.map((placement) => {
            return <option>{placement}</option>;
          })}
        </select>
      </div>
      <div className="formData">
        <label>Description</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Brand</label>
        <input
          type="text"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Formality</label>
        <select
          value={formality}
          onChange={(event) => {
            setFormality(event.target.value);
          }}
        >
          {formalityOptions.map((formality) => {
            return <option>{formality}</option>;
          })}
        </select>
      </div>
      <div className="formData">
        <label>Color</label>
        <select
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        >
          {colorOptions.map((color) => {
            return <option>{color}</option>;
          })}
        </select>
      </div>
      <div className="formData">
        <label>Waterproof?</label>
        <input
          type="checkbox"
          onChange={(event) => {
            setIsWaterproof(event.target.checked);
          }}
        />
      </div>

      <div className="buttonContainer">
        <button
          className="buttonContainer_button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <button className="buttonContainer_button">Cancel</button>
      </div>
    </div>
  );
};

export default AddNewClothingItem;
