import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <span className="header__circle"></span>
        <h3 className="header__contentInfo">Recruitment task</h3>
        <span className="header__vertline"></span>
      </div>
    </header>
  );
};

export default Header;
