import React, { FC } from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";

// todo: put this in a more sensible place, or share this between front & backend?...
export interface PostProps {
  post: {
    title: string;
    content: string;
  };
}

const BlogPost = ({ post }: PostProps) => {
  return (
    <SectionContainer>
      <Header text={post.title} />
      <div>{post.content}</div>
    </SectionContainer>
  );
};

export default BlogPost;
