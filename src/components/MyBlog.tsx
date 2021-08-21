import React, { FC, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { getUserBlog } from "../utils/apiRoutes";
import BlogFeed from "./BlogFeed";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";

const MyBlog: FC = () => {
  const [user] = useContext(UserContext);

  return (
    <div className="max-w-prose w-full">
      <SectionContainer>
        <Header text="My Blog" />
      </SectionContainer>
      <BlogFeed blogQuery={getUserBlog(user?.user._id)} />
    </div>
  );
};

export default MyBlog;
