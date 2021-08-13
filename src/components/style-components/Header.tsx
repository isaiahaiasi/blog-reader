import React from "react";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className="header pt-4 pb-4">
      <h1 className="header-main pt-2 pb-2 text-6xl">{text}</h1>
    </header>
  );
};

export default Header;
