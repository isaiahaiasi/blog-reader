import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { ApiComment } from "../../utils/dataInterfaces";
import { getPost, getPostComments } from "../../utils/routes";
import AddCommentForm from "../AddCommentForm";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import Loading from "../Loading";
import SectionContainer from "../style-components/SectionContainer";

const FullBlogPost = () => {
  const { postid } = useParams<{ postid: string }>();
  const [comments, setComments] = useState([]);

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
      setComments(updatedComments);
    };

    updateComments();
  }, []);

  const refreshComments = (response: ApiComment) => {
    setComments((prevComments) => [response, ...prevComments]);
  };

  // TODO: replace error divs w actual Error component

  return (
    <div className="w-full max-w-prose">
      <div className="post-container">
        {postError && <div>error loading post!</div>}
        {postLoading && <Loading name="post" />}
        {postData && !postData.errors && <BlogPost post={postData} />}
      </div>
      <div className="comments-container">
        <SectionContainer>
          Comments: {comments?.length ?? "0"}
          <AddCommentForm onSubmitComment={refreshComments} />
        </SectionContainer>
        {commentsError && <div>error loading comments!</div>}
        {commentsLoading && <Loading name="comments" />}
        {comments && <CommentList comments={comments} />}
      </div>
    </div>
  );
};

export default FullBlogPost;
