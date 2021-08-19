import React, { FC } from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import Timestamp from "./Timestamp";

// todo: put this in a more sensible place, or share this between front & backend?...
export interface PostProps {
  post: {
    title: string;
    content: string;
    publishDate: string;
  };
}

const BlogPost = ({ post }: PostProps) => {
  console.log(post);
  return (
    <SectionContainer>
      <Header text={post.title} />
      <div>{post.content}</div>
      <Timestamp date={post.publishDate} />
    </SectionContainer>
  );
};

export default BlogPost;
