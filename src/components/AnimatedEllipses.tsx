/* eslint-disable react/prop-types */
import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

const AnimatedEllipses = ({ intervalTime = 500 }) => {
  const [dotCount, setDotCount] = useState(0);

  useInterval(() => {
    setDotCount((prevCount) => prevCount + 1);
  }, intervalTime);

  const getDots = () => ".".repeat((dotCount % 3) + 1);

  return <>{getDots()}</>;
};

export default AnimatedEllipses;
