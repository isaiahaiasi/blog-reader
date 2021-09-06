import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { ApiComment } from "../utils/dataInterfaces";
import { getComment } from "../utils/routes";
import AuthorTag from "./AuthorTag";
import DeleteCommentInput from "./DeleteItem";
import SectionContainer from "./style-components/SectionContainer";
import Timestamp from "./Timestamp";

const Comment = ({ comment }: { comment: ApiComment }) => {
  const [userData] = useContext(UserContext);
  const history = useHistory();

  const { del, response } = useFetch(getComment(comment._id), {});

  const handleDeleteComment = async () => {
    // fetch request to delete comment
    const result = await del();
    if (response.ok) {
      // This re-fetches the comments, so the list is updated.
      // However, it does so by reloading the page in the browser.
      // There is probably another way that would be better UX.
      history.go(0);
      console.log("comment delete response:", result);
    }
  };

  return (
    <SectionContainer>
      <div>{comment.content}</div>
      {userData?._id === comment.author._id && (
        <div className="absolute top-0 right-0">
          <div className="overflow-hidden h-8 w-8">
            <DeleteCommentInput onConfirm={handleDeleteComment} />
          </div>
        </div>
      )}
      <div className="w-full flex justify-between italic text-gray-500">
        <AuthorTag author={comment.author} />
        <Timestamp date={comment.createdAt} />
      </div>
    </SectionContainer>
  );
};

export default Comment;
