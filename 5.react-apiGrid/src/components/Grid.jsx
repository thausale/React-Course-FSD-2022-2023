import React from "react";

const Grid = (props) => {
  return (
    <ul>
      {props.users.map((person) => (
        <li key={person.login.username}>{person.name.first}</li>
      ))}
    </ul>
  );
};
export default Grid;
