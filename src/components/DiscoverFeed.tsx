import "../styles/header.css";
import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import { BLOG_ROUTE } from "../utils/apiRoutes";

const DiscoverFeed: FC = () => (
  <div className="max-w-prose w-full">
    <BlogFeed blogQuery={BLOG_ROUTE} />
  </div>
);

export default DiscoverFeed;
