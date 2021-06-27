// Renders list of blog posts
// TODO: not how to generalize this... pass in api url as prop?
// TODO: confirm

import React, { FC } from "react";
import useFetch from "use-http";
import { BLOG_ROUTE } from "../utils/apiRoutes";
import BlogPost from "./BlogPost";

const BlogFeed: FC = () => {
  const { data, error, loading } = useFetch(BLOG_ROUTE, {}, []);
  return (
    <>
      {error && <p> {JSON.stringify(error)} </p>}
      {loading && <p>Loading...</p>}
      {data &&
        (data as Array<any>).map((post) => {
          return <BlogPost post={post} key={post._id} />;
        })}
    </>
  );
};

export default BlogFeed;
