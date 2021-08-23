import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { getUserBlog } from "../../utils/routes";
import BlogFeed from "../BlogFeed";

const UserFeed: FC = () => {
  const { userid } = useParams<{ userid: string }>();
  return (
    <div className="max-w-prose w-full">
      <BlogFeed blogQuery={getUserBlog(userid)} />
    </div>
  );
};

export default UserFeed;
