import React from "react";
import { Author } from "../dataInterfaces";

// for now, just show username
// TODO: link to author's blogfeed

interface AuthorTagProps {
  author: Author;
  className?: string;
}
const AuthorTag = ({ author }: AuthorTagProps) => {
  return <div className={"author-tag"}>by {author.username}</div>;
};

export default AuthorTag;
