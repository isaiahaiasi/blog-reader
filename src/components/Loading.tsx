import React, { useState } from "react";
import useInterval from "../hooks/useInterval";
import SectionContainer from "./style-components/SectionContainer";

interface LoadingProps {
  name?: string;
}

const Loading = ({ name }: LoadingProps) => {
  const [dotCount, setDotCount] = useState(0);

  useInterval(() => {
    setDotCount((prevCount) => prevCount + 1);
  }, 500);

  const getDots = () => ".".repeat((dotCount % 3) + 1);

  return (
    <SectionContainer>
      {name ? `loading ${name}` : "loading"}
      {getDots()}
    </SectionContainer>
  );
};

export default Loading;
