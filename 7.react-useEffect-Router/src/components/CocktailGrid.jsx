import React from "react";
import Cocktail from "./Cocktail";

const CocktailGrid = ({ cocktails }) => {
  return (
    <section>
      {cocktails.map((cocktail) => {
        return <Cocktail cocktail={cocktail} key={cocktail._id} />;
      })}
    </section>
  );
};

export default CocktailGrid;
