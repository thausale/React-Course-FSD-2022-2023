import React, { useState } from "react";
import Grid from "./Grid";

const Select = ({ breeds, searchBreed, setSearchBreed }) => {
  //VARIBLES
  let arr = [];

  //FUNCTIONS
  if (breeds) {
    arr = Object.entries(breeds).map((breed) => breed[0]);
  }

  //RETURN
  return (
    <>
      <select
        name=""
        id=""
        onChange={(e) => {
          setSearchBreed(e.target.value);
        }}
      >
        <option key="1" value="">
          Choose breed
        </option>
        {arr.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
