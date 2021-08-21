import React, { FormEvent, useContext, useState } from "react";
import useFetch from "use-http";
import { useHistory } from "react-router-dom";
import { API_LOGIN } from "../utils/routes";
import UserContext from "../contexts/UserContext";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import Input from "./style-components/Input";
import Button from "./style-components/Button";

// TODO: separate logic from JSX?

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { post, response, error } = useFetch(API_LOGIN);
  const [, setUser] = useContext(UserContext);

  const history = useHistory();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = { username, password };

    const postResult = await post(body);

    if (response.ok && postResult?.token) {
      setUser(postResult);
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
