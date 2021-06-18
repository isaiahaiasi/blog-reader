import React from "react";

const SvgFilters = () => (
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
