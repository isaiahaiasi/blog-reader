// Renders list of blog posts
// TODO: not how to generalize this... pass in api url as prop?
// TODO: confirm

import React, { useContext } from "react";
import useFetch from "use-http";
import { UserContext } from "../App";
import BlogPost from "./BlogPost";

interface BlogFeedProps {
  blogQuery: string;
}

const BlogFeed = ({ blogQuery }: BlogFeedProps) => {
  const [userData] = useContext(UserContext);

  const { loading, error, data } = useFetch(
    blogQuery,
    userData?.token
      ? { headers: { Authorization: `Bearer ${userData.token}` } }
      : {},
    []
  );

  console.log(data);
  return (
    <>
      {error && <p> {JSON.stringify(error)} </p>}
      {loading && <p>Loading...</p>}
      {data &&
        Array.isArray(data) &&
        (data as Array<any>).map((post) => {
          return <BlogPost post={post} key={post._id} />;
        })}
    </>
  );
};

export default BlogFeed;
