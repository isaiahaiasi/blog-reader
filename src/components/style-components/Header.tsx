import React from "react";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => (
  <header className="header">
    <h1 className="header-main text-6xl">{text}</h1>
  </header>
);

export default Header;
