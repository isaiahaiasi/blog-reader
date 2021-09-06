import React, { FormEventHandler, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { ApiComment } from "../utils/dataInterfaces";
import { getPostComments } from "../utils/routes";
import Button from "./style-components/Button";

interface AddCommentFormProps {
  onSubmitComment: (result: ApiComment) => void;
}

const AddCommentForm = ({ onSubmitComment }: AddCommentFormProps) => {
  const { postid } = useParams<{ postid: string }>();
  const [userData] = useContext(UserContext);

  const { post, response } = useFetch(getPostComments(postid), {
    credentials: "include",
  });

  const [content, setContent] = useState("");

  const handleInputEvent: FormEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmitComment: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const comment = { content };

    console.log("submitting comment", comment);
    const postResult = await post(comment);

    if (response.ok && postResult) {
      const newComment = {
        ...postResult,
        author: { username: userData.username },
      };
      onSubmitComment(newComment);
    } else {
      console.error(response.body);
    }

    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmitComment} className="flex flex-col gap-2">
        <textarea
          value={content}
          onInput={handleInputEvent}
          className="border-2"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default AddCommentForm;
