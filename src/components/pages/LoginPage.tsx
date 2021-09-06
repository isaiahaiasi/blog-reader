import React, { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";
import UserContext from "../../contexts/UserContext";
import { API_LOGIN } from "../../utils/routes";
import Button from "../style-components/Button";
import Header from "../style-components/Header";
import Input from "../style-components/Input";
import SectionContainer from "../style-components/SectionContainer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { post, response, error } = useFetch(API_LOGIN, {
    credentials: "include",
  });
  const [, setUser] = useContext(UserContext);

  const history = useHistory();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = { username, password };

    const postResult = await post(body);

    if (response.ok && postResult?.user) {
      console.log(postResult.user);
      setUser(postResult.user);
      history.push("/discover");
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <SectionContainer>
      <Header text="Log in" />
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          label="Username:"
          value={username}
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          label="Password:"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Log in</Button>
      </form>
      <div>{error && <p>{error.message}</p>}</div>
    </SectionContainer>
  );
};

export default LoginPage;
