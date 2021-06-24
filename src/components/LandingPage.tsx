import React, { FC } from "react";
import Header from "./style-components/Header";

import SectionContainer from "./style-components/SectionContainer";
import BlogFeed from "./BlogFeed";

import "../styles/header.css";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose">
      {/* {[
        "Welcome to my landing page",
        "Section 2",
        "This is like a post",
        "Section 4",
        "Ad Space Here!!!",
      ].map((text, i) => (
        <SectionContainer key={i}>
          <Header
            text={text}
            strokeOffset={{ x: 3, y: 10, unit: "px", rotation: 0.2 }}
          />
          <div>Welcome to my landing page!</div>
        </SectionContainer>
      ))} */}
      <BlogFeed />
    </div>
  );
};

export default LandingPage;
