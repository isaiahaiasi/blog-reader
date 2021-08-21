import React from "react";
import { User } from "../dataInterfaces";

// for now, just show username
// TODO: link to author's blogfeed

interface AuthorTagProps {
  author: User;
  className?: string;
}
const AuthorTag = ({ author, className }: AuthorTagProps) => (
  <div className={`author-tag ${className}`}>by {author.username}</div>
);

export default AuthorTag;
