import React, { useEffect, useState } from "react";
import axios from "axios";

const Grid = ({ searchBreed }) => {
  //VARIABLES
  const [Pictures, setPictures] = useState([]);

  //FUNCTIONS
  const getPhotos = async () => {
    const {
      data: { message },
    } = await axios(`https://dog.ceo/api/breed/${searchBreed}/images`);
    console.log(message);
    setPictures(message);
  };

  //EFFECTS
  useEffect(() => {
    if (searchBreed) {
      getPhotos();
    }
  }, [searchBreed]);

  //RETURN
  return (
    <section>
      {Pictures.map((picture) => (
        <article key={picture}>
          <img src={picture} />
        </article>
      ))}
    </section>
  );
};

export default Grid;
