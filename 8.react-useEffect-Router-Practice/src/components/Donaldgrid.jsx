import React from "react";
import { Link } from "react-router-dom";

const Donaldgrid = (props) => {
  const {
    donalds: { data },
  } = props;
  console.log(data);
  return (
    <section>
      <h1>donald</h1>;
      {data ? (
        data.map((donald) => {
          console.log(donald._id);
          return (
            <Link to={`/${donald._id}`}>
              <img src={donald.imageUrl} alt="" />;
            </Link>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};
export default Donaldgrid;
