import React, { FormEventHandler, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { getPostComments } from "../utils/routes";
import Button from "./style-components/Button";
import SectionContainer from "./style-components/SectionContainer";

const AddCommentForm = () => {
  const { postid } = useParams<{ postid: string }>();
  const [userData] = useContext(UserContext);
  const { post } = useFetch(
    getPostComments(postid),
    userData?.token
      ? { headers: { Authorization: `Bearer ${userData.token}` } }
      : {}
  );

  const [content, setContent] = useState("");

  const handleInputEvent: FormEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmitComment: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const comment = { content };
    setContent("");

    console.log("submitting comment", comment);
    const postResult = await post(comment);
    console.log(postResult);

    // TODO: make comments re-render when post is returned...
    // (which I believe will require a useEffect)
  };

  return (
    <SectionContainer>
      <form onSubmit={handleSubmitComment} className="flex flex-col">
        <textarea value={content} onInput={handleInputEvent} />
        <Button type="submit">Submit</Button>
      </form>
    </SectionContainer>
  );
};

export default AddCommentForm;
