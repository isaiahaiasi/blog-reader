import React from "react";
import { Link } from "react-router-dom";
import { ApiPost } from "../utils/dataInterfaces";
import { ROUTER_POST } from "../utils/routes";
import AuthorTag from "./AuthorTag";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import SectionContent from "./style-components/SectionContent";
import Timestamp from "./Timestamp";

export interface PostProps {
  post: ApiPost;
}

const BlogPost = ({ post }: PostProps) => (
  <SectionContainer>
    <Link to={`${ROUTER_POST}/${post._id}`}>
      <Header text={post.title} />
    </Link>
    <SectionContent>{post.content}</SectionContent>
    <div className="w-full flex justify-between italic text-gray-500">
      <AuthorTag author={post.author} />
      <Timestamp date={post.publishDate} />
    </div>
  </SectionContainer>
);

export default BlogPost;
