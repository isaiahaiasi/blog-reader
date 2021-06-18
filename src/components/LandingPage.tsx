import React, { FC } from "react";
import Header from "./Header";

import "../styles/header.css";
import SectionContainer from "./SectionContainer";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose">
      <SectionContainer>
        <Header text="Blogstream" />
        <div>Welcome to my landing page!</div>
      </SectionContainer>
    </div>
  );
};

export default LandingPage;
