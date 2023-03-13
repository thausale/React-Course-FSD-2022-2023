import React, { useState, useEffect } from "react";
import axios from "axios";
const Form = () => {
  const [breeds, setBreeds] = useState();
  const getBreeds = async () => {
    const {
      data: { message },
    } = await axios("https://dog.ceo/api/breeds/list/all");
    setBreeds(message);
    console.log(message);
  };

  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div className="form">
      <h2>Select breed</h2>

      <button onClick={getBreeds}>test</button>
    </div>
  );
};

export default Form;
