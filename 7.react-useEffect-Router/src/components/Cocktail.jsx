import React from "react";
import { nanoid } from "nanoid";

const Cocktail = ({ cocktail }) => {
  const { name, imageUrl, films } = cocktail;

  return (
    <aside>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <ul>
        {films.map((film) => (
          <li key={nanoid()}>{film}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Cocktail;
