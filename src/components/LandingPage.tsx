import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import "../styles/header.css";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose">
      <BlogFeed />
    </div>
  );
};

export default LandingPage;
