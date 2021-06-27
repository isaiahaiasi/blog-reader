import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import "../styles/header.css";
import UserFeed from "./UserFeed";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose w-full">
      <UserFeed />
      <BlogFeed />
    </div>
  );
};

export default LandingPage;
