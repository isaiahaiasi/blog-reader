// Renders list of blog posts

import React, { useContext } from "react";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { tryGetAuthHeader } from "../utils/fetchHelpers";
import BlogPost from "./BlogPost";
import Error from "./Error";
import Loading from "./Loading";

interface BlogFeedProps {
  blogQuery: string;
}

const BlogFeed = ({ blogQuery }: BlogFeedProps) => {
  const [userData] = useContext(UserContext);

  const { loading, error, data } = useFetch(
    blogQuery,
    { headers: tryGetAuthHeader(userData) },
    []
  );

  return (
    <>
      {error && <Error message="Oops! Couldn't load posts!" />}
      {loading && <Loading />}
      {data &&
        Array.isArray(data) &&
        (data as Array<any>).map((post) => (
          <BlogPost post={post} key={post._id} />
        ))}
    </>
  );
};

export default BlogFeed;
