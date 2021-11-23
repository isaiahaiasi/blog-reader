import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import UserContext from "../../contexts/UserContext";
import { ApiComment } from "../../utils/dataInterfaces";
import { getPost, getPostComments } from "../../utils/routes";
import AddCommentForm from "../AddCommentForm";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import Error from "../Error";
import Loading from "../Loading";
import SectionContainer from "../style-components/SectionContainer";

const FullBlogPost = () => {
  const { postid } = useParams<{ postid: string }>();
  const [comments, setComments] = useState([]);
  const [userData] = useContext(UserContext);

  // fetch post
  const {
    loading: postLoading,
    error: postError,
    data: postData,
  } = useFetch(getPost(postid), {}, []);

  // fetch comments
  const {
    error: commentsError,
    loading: commentsLoading,
    get: getComments,
  } = useFetch(getPostComments(postid), { data: [] });

  useEffect(() => {
    const updateComments = async () => {
      const updatedComments = await getComments();
      setComments(updatedComments?.content);
    };

    updateComments();
  }, []);

  const refreshComments = (response: ApiComment) => {
    setComments((prevComments) => [response, ...prevComments]);
  };

  return (
    <div className="w-full max-w-prose">
      <div className="post-container">
        {postError && <Error message="Error loading post!" />}
        {postLoading && <Loading name="post" />}
        {postData?.content && !postData.errors && (
          <BlogPost post={postData.content} />
        )}
      </div>
      <div className="comments-container">
        <SectionContainer>
          Comments: {comments?.length ?? "0"}
          {userData && <AddCommentForm onSubmitComment={refreshComments} />}
        </SectionContainer>
        {commentsError && <Error message="error loading comments!" />}
        {commentsLoading && <Loading name="comments" />}
        {comments && <CommentList comments={comments} />}
      </div>
    </div>
  );
};

export default FullBlogPost;
