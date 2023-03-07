import React from "react";

const Form = ({ setAmount, setUserAmount, amount }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUserAmount(amount);
      }}
    >
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserAmount(amount);
        }}
      >
        Go
      </button>
    </form>
  );
};

export default Form;
