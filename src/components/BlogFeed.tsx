// Renders list of blog posts
// TODO: not how to generalize this... pass in api url as prop?
// TODO: confirm

import React, { FC } from "react";
import { useFetch } from "../hooks/useFetch";
import BlogPost from "./BlogPost";

import ErrorMessage from "./ErrorMessage";

const BlogFeed: FC = () => {
  const { res, err, isLoading } = useFetch("http://localhost:3000/api/blog");
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {err && <ErrorMessage error={err} />}
      {res &&
        (res as Array<any>).map((post, i) => {
          console.log(post);
          return <BlogPost post={post} key={i} />;
        })}
    </>
  );
};

export default BlogFeed;
