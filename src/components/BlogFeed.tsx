// Renders list of blog posts
// TODO: not how to generalize this... pass in api url as prop?
// TODO: confirm

import React, { FC } from "react";
import useFetch from "use-http";
import BlogPost from "./BlogPost";

const BlogFeed: FC = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:3000/api/blog",
    {},
    []
  );
  return (
    <>
      {error && <p> {JSON.stringify(error)} </p>}
      {loading && <p>Loading...</p>}
      {data &&
        (data as Array<any>).map((post, i) => {
          console.log(post);
          return <BlogPost post={post} key={i} />;
        })}
    </>
  );
};

export default BlogFeed;
