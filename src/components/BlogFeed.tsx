// Renders list of blog posts

import React from "react";
import useFetch from "use-http";
import BlogPost from "./BlogPost";
import Error from "./Error";
import Loading from "./Loading";

interface BlogFeedProps {
  blogQuery: string;
}

const BlogFeed = ({ blogQuery }: BlogFeedProps) => {
  const { loading, error, data } = useFetch(blogQuery, {}, []);

  return (
    <>
      {error && <Error message="Oops! Couldn't load posts!" />}
      {loading && <Loading />}
      {data?.content &&
        Array.isArray(data.content) &&
        (data.content as Array<any>).map((post) => (
          <BlogPost post={post} key={post._id} />
        ))}
    </>
  );
};

export default BlogFeed;
