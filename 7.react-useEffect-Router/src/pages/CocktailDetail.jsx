import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";

const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();
  const params = useParams();
  console.log(id);
  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    const url = "https://api.disneyapi.dev/characters/" + id;
    (async () => {
      const { data } = await axios(url);
      setCocktail(data);
    })();
  }, []);

  return (
    <>
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
    </>
  );
};

export default CocktailDetail;
