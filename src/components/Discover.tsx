import "../styles/header.css";
import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import { BLOG_ROUTE } from "../utils/apiRoutes";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose w-full">
      <BlogFeed blogQuery={BLOG_ROUTE} />
    </div>
  );
};

export default LandingPage;
