import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="flex navbar">
        <a href="/" className="navLogo">
          ImageScape
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
