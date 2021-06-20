import React from "react";

interface BorderProps {
  clean?: boolean;
}

function getRandomFromArray<T>(array: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const Border = ({ clean }: BorderProps) => {
  const rotationClass = clean
    ? 0
    : getRandomFromArray([
        "rotate-2",
        "rotate-1",
        "rotate-0",
        "-rotate-1",
        "-rotate-2",
      ]);

  return (
    <div
      className={
        "absolute inset-0 m-4 border-2 rounded-md border-solid border-red-500 pointer-events-none transform " +
        rotationClass
      }
    />
  );
};

export default Border;
