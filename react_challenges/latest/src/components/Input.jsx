import React, { useState } from "react";

const Input = (props) => {
  console.log(props);
  const {
    value,
    setValue,
    placeholder,
    type = "text",
    className = "",
    required,
    ...rest
  } = props;
  const [input, setInput] = useState("");
  return (
    <label>
      {placeholder}
      {required && <span className="input-required">*</span>}

      <div>
        <input
          {...rest}
          placeholder={placeholder}
          required={required}
          className={`input  ${className}`}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </label>
  );
};

export default Input;
