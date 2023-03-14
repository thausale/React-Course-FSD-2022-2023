import React from "react";

const Header = ({ children }) => {
  return (
    <main>
      <h1>Dit is de header</h1>
      {children}
      <div>
        <hr />
        <p>Copyright cocktail App</p>
      </div>
    </main>
  );
};

export default Header;
