import React from "react";

// ! ok, all this might be pointless. I can't figure out how to set a css var
// from React in typescript...

type cssUnits =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "lh"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "cm"
  | "mm"
  | "Q"
  | "in"
  | "pc"
  | "pt"
  | "px";

interface FilterProps {
  offset?: {
    x?: number;
    y?: number;
    unit?: cssUnits;
  };
}

const SvgFilters = ({ offset }: FilterProps) => (
  <svg
    version="1.1"
    // xmlns="//www.w3.org/2000/svg"
    // xmlns:xlink="//www.w3.org/1999/xlink"
    style={{ display: "none" }}
  >
    <defs>
      <filter id="stroke-text">
        <feMorphology operator="dilate" radius="2"></feMorphology>
        <feComposite operator="xor" in="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

export default SvgFilters;