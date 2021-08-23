import React from "react";
import { ApiComment } from "../dataInterfaces";
import AuthorTag from "./AuthorTag";
import SectionContainer from "./style-components/SectionContainer";
import Timestamp from "./Timestamp";

const Comment = ({ comment }: { comment: ApiComment }) => (
  <SectionContainer>
    <div>{comment.content}</div>
    <div className="w-full flex justify-between italic text-gray-500">
      <AuthorTag author={comment.author} />
      <Timestamp date={comment.iat} />
    </div>
  </SectionContainer>
);

export default Comment;
