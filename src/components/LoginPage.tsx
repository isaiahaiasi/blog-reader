import React, { FormEvent, useState } from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import Input from "./style-components/Input";
import Button from "./style-components/Button";
import useFetch from "use-http";
import { LOGIN_ROUTE } from "../utils/apiRoutes";

// TODO: use fetch API in useEffect to send form data to backend
// TODO: extract fetch to useFetch hook
// TODO: replace useFetch hook with a proper package
// (just want to implement it by hand to learn it)

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [res, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const { post, response } = useFetch(LOGIN_ROUTE);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = { username, password };
    const postResponse = await post(body).catch(setError);
    if (!response.ok) {
      setError(postResponse);
    } else {
      setError(null);
      setResponse(postResponse);
      // TODO: redirect
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
      <div>
        {error && <p>{error.message}</p>}
        <h2>Response</h2>
        {!res
          ? "no response yet..."
          : res.user?.username ?? "malformed response"}
      </div>
    </SectionContainer>
  );
};

export default LoginPage;
