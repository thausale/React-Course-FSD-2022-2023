import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    const url = "https://api.disneyapi.dev/characters/1705";
    (async () => {
      const { data } = await axios(url);
      setCocktail(data);
    })();
  }, []);

  return (
    <main>
      <Link to="/">Back to home</Link>
      {cocktail.name ? (
        <>
          <h1>{cocktail.name}</h1>
          <img src={cocktail.imageUrl} alt={cocktail.name} />
          <ul>
            {cocktail.films.map((film) => (
              <li key={nanoid()}>{film}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default CocktailDetail;
