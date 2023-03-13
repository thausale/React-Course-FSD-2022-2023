import React from "react";
import { nanoid } from "nanoid";

const CityLi = (props) => {
  const { cities, setCities } = props;

  const removeCity = (idToFilter) => {
    // const filtered = cities.filter((city) => city != cityToFilter);
    // setCities(filtered);

    setCities((prevState) =>
      prevState.filter((el) => {
        return el != idToFilter;
      })
    );
  };

  return (
    <ul className="cityUl">
      {cities.map((city) => (
        <>
          <li key={nanoid()} className="cityLi">
            {city[1]}
            <button
              className="cityDeleteBtn"
              onClick={() => {
                removeCity(city);
              }}
            >
              X
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default CityLi;
