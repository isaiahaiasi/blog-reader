import React from "react";
import SvgFilters from "./svg/svg-filters";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => (
  <header className="header pt-4 pb-4">
    <SvgFilters offset={{ x: 3, y: 3, unit: "px" }} />
    <h1 className="header-main pt-2 pb-2 text-6xl">
      {text}
      <p className="header-stroke" style={{ filter: "url(#stroke-text)" }}>
        {text}
      </p>
    </h1>
    <h2 className="italic">Coming soon!</h2>
  </header>
);

export default Header;
