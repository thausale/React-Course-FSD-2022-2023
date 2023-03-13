import React, { useState } from "react";

const Title = (props) => {
  const [buttonText, setButtonText] = useState("hide title");
  const [visible, setVisible] = useState(true);
  const { children } = props;

  const toggleVisibility = () => {
    setVisible(!visible);
    setButtonText(visible ? "show title" : "hide title");
  };
  return (
    <div>
      <button onClick={toggleVisibility}>{buttonText}</button>
      {visible && <h1>{children}</h1>}
    </div>
  );
};

export default Title;
