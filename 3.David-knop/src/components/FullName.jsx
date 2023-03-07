import React from "react";

const FullName = (props) => {
  console.log(props);
  const { fn, ln, changeFn } = props;
  console.log();
  return (
    <div>
      <h1>{fn}</h1>
      <h2>{ln}</h2>
      <button onClick={() => changeFn("Niels")}>change to david</button>
    </div>
  );
};

export default FullName;
