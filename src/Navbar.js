import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-brand">ColorMatch</h1>
        <ul className ="navbar-link"><li><a href="#">New Game</a></li></ul>
      </nav>
    </header>
  );
};

export default Navbar;
