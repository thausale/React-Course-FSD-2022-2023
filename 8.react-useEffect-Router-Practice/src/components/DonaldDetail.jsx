import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const DonaldDetail = () => {
  const [donald, setDonald] = useState();
  const { id } = useParams();
  //   console.log(id);
  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    const url = `https://api.disneyapi.dev/characters/${id}`;
    (async () => {
      const { data } = await axios(url);
      setDonald(data);
    })();
  }, []);
  console.log(donald);

  return (
    <>
      <Link to="/">Back to home</Link>
      <h2>Hello</h2>
      {donald ? (
        <>
          <h1>{donald.name}</h1>
          <img src={donald.imageUrl} alt={donald.name} />
          <ul>
            {donald.films.map((film) => (
              <li>{film}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>"loading"</p>
      )}
    </>
  );
};

export default DonaldDetail;
