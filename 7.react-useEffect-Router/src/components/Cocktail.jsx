import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { name, imageUrl, films, _id } = cocktail;
  console.log(_id);
  return (
    <Link to="/cocktail/1705">
      <aside>
        <img src={imageUrl} alt={name} />
        <h2>
          {name} {_id}
        </h2>
        <ul>
          {films.map((film) => (
            <li key={nanoid()}>{film}</li>
          ))}
        </ul>
      </aside>
    </Link>
  );
};

export default Cocktail;
