import React, { useEffect, useState } from "react";

const Button = (props) => {
  const { children, outline, className = "" } = props;

  return (
    <div>
      <button
        {...props}
        className={`btn ${className} ${
          outline ? "btn-outline" : "btn-default"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
