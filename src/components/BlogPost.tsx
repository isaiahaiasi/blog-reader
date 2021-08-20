import React from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import SectionContent from "./style-components/SectionContent";
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
      <SectionContent>{post.content}</SectionContent>
      <div>
        <Timestamp
          date={post.publishDate}
          className="italic text-gray-500 text-right"
        />
      </div>
    </SectionContainer>
  );
};

export default BlogPost;
