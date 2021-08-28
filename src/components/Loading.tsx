import React from "react";
import AnimatedEllipses from "./AnimatedEllipses";
import SectionContainer from "./style-components/SectionContainer";

interface LoadingProps {
  name?: string;
}

const Loading = ({ name }: LoadingProps) => (
  <SectionContainer>
    {name ? `loading ${name}` : "loading"}
    <AnimatedEllipses intervalTime={300} />
  </SectionContainer>
);

export default Loading;
