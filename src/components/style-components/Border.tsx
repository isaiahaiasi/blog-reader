import React, { useEffect, useState } from "react";

// TODO: put getRandomFromArray into useEffect hook?
// (currently re-renders a LOT)

interface BorderProps {
  clean?: boolean;
  className?: string; // for margin
}

function getRandomFromArray<T>(array: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const Border = ({ clean, className }: BorderProps) => {
  const [rotationClass, setRotationClass] = useState("");
  useEffect(() => {
    setRotationClass(
      getRandomFromArray([
        "rotate-2",
        "rotate-1",
        "rotate-0",
        "-rotate-1",
        "-rotate-2",
      ])
    );
  }, []);

  return (
    <div
      className={`absolute inset-0 border-2 rounded-md border-solid border-red-500 pointer-events-none transform
        ${rotationClass} ${className}`}
    />
  );
};

export default Border;
