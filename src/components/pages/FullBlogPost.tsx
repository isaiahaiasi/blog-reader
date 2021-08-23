import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { getPost, getPostComments } from "../../utils/routes";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import SectionContainer from "../style-components/SectionContainer";

const FullBlogPost = () => {
  const { postid } = useParams<{ postid: string }>();

  // fetch post
  const {
    loading: postLoading,
    error: postError,
    data: postData,
  } = useFetch(getPost(postid), {}, []);

  // fetch comments
  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useFetch(getPostComments(postid), {}, []);

  const getCommentCount = (comments: any[]) => {
    if (!comments || !Array.isArray(comments)) {
      return "???";
    }

    return comments.length;
  };

  // TODO: replace error divs w actual Error component
  // TODO: replace loading divs w actual Loading component

  return (
    <div className="w-full max-w-prose">
      <div className="post-container">
        {postError && <div>error loading post!</div>}
        {postLoading && <div>loading post...</div>}
        {postData && !postData.errors && <BlogPost post={postData} />}
      </div>
      <div className="comments-container">
        <SectionContainer>
          Comments: {getCommentCount(commentsData)}
        </SectionContainer>
        {commentsError && <div>error loading comments!</div>}
        {commentsLoading && <div>loading comments...</div>}
        {commentsData && <CommentList comments={commentsData} />}
      </div>
    </div>
  );
};

export default FullBlogPost;
