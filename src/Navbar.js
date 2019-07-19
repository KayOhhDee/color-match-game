import React from "react";

const Navbar = ({handleNewGame}) => {
  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-brand">ColorMatch</h1>
        <ul className ="navbar-link"><li><button onClick={handleNewGame}>New Game</button></li></ul>
      </nav>
    </header>
  );
};

export default Navbar;
