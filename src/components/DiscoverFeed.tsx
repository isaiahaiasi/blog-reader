import "../styles/header.css";
import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import { API_BLOGPOST } from "../utils/routes";

const DiscoverFeed: FC = () => (
  <div className="max-w-prose w-full">
    <BlogFeed blogQuery={API_BLOGPOST} />
  </div>
);

export default DiscoverFeed;
