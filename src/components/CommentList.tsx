import React from "react";
import { ApiComment } from "../utils/dataInterfaces";
import Comment from "./Comment";

interface CommentListProps {
  comments: ApiComment[];
}
const CommentList = ({ comments }: CommentListProps) => (
  <>
    {Array.isArray(comments) && (
      <div className="w-full">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </div>
    )}
  </>
);

export default CommentList;
