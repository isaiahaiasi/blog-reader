import React from "react";
import SvgFilters from "./svg/svg-filters";
import { Units } from "./@types/css";

type StrokeOffset = {
  x: number;
  y: number;
  unit: Units;
  rotation?: number;
};

interface HeaderProps {
  text: string;
  strokeOffset?: StrokeOffset;
}

// TODO: either find a way to avoid instantiating several copies of SvgFilter
// TODO: or pass in an id to reference
// (currently, multiple copies of svgFilter are being instantiated w same id)
const Header = ({
  text,
  strokeOffset = { x: 3, y: 10, unit: "px", rotation: 0.2 },
}: HeaderProps) => {
  const strokeStyle = {
    "--h-offset-x": strokeOffset.x + strokeOffset.unit,
    "--h-offset-y": strokeOffset.y + strokeOffset.unit,
    "--h-rotation": strokeOffset.rotation + "deg",
  };

  return (
    <header className="header pt-4 pb-4">
      <SvgFilters />
      <h1 className="header-main pt-2 pb-2 text-6xl">
        {text}
        <p
          className="header-stroke"
          style={{ filter: "url(#stroke-text)", ...strokeStyle }}
        >
          {text}
        </p>
      </h1>
    </header>
  );
};

export default Header;
