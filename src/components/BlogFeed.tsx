// Renders list of blog posts

import React, { useContext } from "react";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import BlogPost from "./BlogPost";
import Loading from "./Loading";

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

  // TODO: replace error divs w actual Error component

  return (
    <>
      {error && <p>Uh-oh! Was not able to load posts!</p>}
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
