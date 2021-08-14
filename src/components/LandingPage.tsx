import React, { FC } from "react";

import BlogFeed from "./BlogFeed";

import "../styles/header.css";
import UserList from "./UserList";
import UserVerifiedCard from "./UserVerifiedCard";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose w-full">
      <UserVerifiedCard />
      <UserList />
      <BlogFeed />
    </div>
  );
};

export default LandingPage;
