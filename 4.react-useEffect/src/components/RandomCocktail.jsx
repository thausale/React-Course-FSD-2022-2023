import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomCocktail = () => {
  const [cocktail, setCocktail] = useState({});
  const getRandomCocktail = async () => {
    const {
      data: { drinks },
    } = await axios("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    setCocktail(drinks[0]);
  };
  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <div>
      <h1>Cocktail of the day</h1>
      {!cocktail.strDrink ? (
        <p>Loading ...</p>
      ) : (
        <div className="drink">
          <h1>
            {cocktail.strDrink} ({cocktail.idDrink})
          </h1>
          <p>{cocktail.strInstructions}</p>
          <img src={cocktail.strDrinkThumb} alt="{cocktail.strDrink}" />
        </div>
      )}

      <button onClick={getRandomCocktail}>Refresh</button>
    </div>
  );
};

export default RandomCocktail;
