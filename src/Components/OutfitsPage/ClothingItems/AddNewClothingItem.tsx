import React, { use } from "react";
import "./AddNewClothingItem.scss";
import type {
  ClothingItem,
  Placement,
  Formality,
  Color,
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

const AddNewClothingItem = () => {
  let tempClothingItem = generateNewBlankClothingItem();

  const [clothingItem, setClothingItem] = useState(tempClothingItem);
  const [id, setId] = useState(tempClothingItem.id);
  const [name, setName] = useState<string>(tempClothingItem.name);
  const [PictureUrl, setPictureUrl] = useState<string>(
    tempClothingItem.pictureUrl
  );
  const [placement, setPlacement] = useState<string>(
    tempClothingItem.placement
  );
  const [description, setDescription] = useState<string>(
    clothingItem.description
  );
  const [brand, setBrand] = useState<string>(tempClothingItem.brand);
  //ManualSetting for these is not ideal
  const [formality, setFormality] = useState<string>("Formal");
  const [color, setColor] = useState<string>("Black");
  const [isWaterproof, setIsWaterproof] = useState<boolean>(
    tempClothingItem.isWaterproof
  );

  const handleSubmit = (event) => {
    console.log(event);

    //add validations to prevent null/invalid text
    const clothingItemCopy = { ...clothingItem };
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

    console.log(clothingItemCopy);

    setClothingItem(clothingItemCopy);

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
            console.log(event.target.value);

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
            console.log(event.target.value);

            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Brand</label>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);

            setBrand(event.target.value);
          }}
        />
      </div>
      <div className="formData">
        <label>Formality</label>
        <select
          value={formality}
          onChange={(event) => {
            console.log(event.target.value);

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
            console.log(event.target.value);

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
            console.log(event.target.checked);

            setIsWaterproof(event.target.checked);
          }}
        />
      </div>

      <div className="buttonContainer">
        <button
          className="buttonContainer_button"
          onClick={(event) => {
            handleSubmit(event);
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
