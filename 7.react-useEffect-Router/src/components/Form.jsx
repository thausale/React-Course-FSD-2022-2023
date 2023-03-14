import React, { useState } from "react";

const Form = ({ setSearchValue }) => {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchValue(input);
        setInput("");
        // getCocktails(); DIT WERKT NIET, INPUT IS NOG NIET GESET IN SEARCHVALUE
        console.log({ input });
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button style={{ backgroundColor: "green" }}>search</button>
    </form>
  );
};

export default Form;
