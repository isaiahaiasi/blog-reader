import React from "react";
import SectionContainer from "./style-components/SectionContainer";

interface LoadingProps {
  name?: string;
}

// TODO: animate "..." using useInterval

const Loading = ({ name }: LoadingProps) => (
  <SectionContainer>
    {name ? `loading ${name}...` : "loading..."}
  </SectionContainer>
);

export default Loading;
