import React from "react";
import { Post } from "../dataInterfaces";
import AuthorTag from "./AuthorTag";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import SectionContent from "./style-components/SectionContent";
import Timestamp from "./Timestamp";

// todo: put this in a more sensible place, or share this between front & backend?...
export interface PostProps {
  post: Post;
}

const BlogPost = ({ post }: PostProps) => {
  console.log(post);
  return (
    <SectionContainer>
      <Header text={post.title} />
      <SectionContent>{post.content}</SectionContent>
      <div className="w-full flex justify-between italic text-gray-500">
        <AuthorTag author={post.author} />
        <Timestamp date={post.publishDate} />
      </div>
    </SectionContainer>
  );
};

export default BlogPost;
