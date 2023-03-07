import React, { useState, useEffect } from "react";
import axios from "axios";

const Cocktails = () => {
  const [cocktailToGet, setCocktailToGet] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const test = 5;

  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components

  const searchCocktail = async () => {
    console.log("searching");
    const {
      data: { drinks },
    } = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailToGet}`
    );
    setCocktails(drinks);
    console.log(drinks);
  };
  useEffect(() => {
    if (cocktailToGet) {
      searchCocktail();
    }
  }, [cocktailToGet]);
  return (
    <div>
      <h3>Search for ingredient</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setCocktailToGet(searchInput);
          setSearchInput("");
        }}
      >
        <label htmlFor="searchField">Search: </label>
        <input
          type="text"
          id="searchField"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button>Search</button>
        <h3>Searching for: {cocktailToGet}</h3>
      </form>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Cocktails;
