import React, { ChangeEventHandler, FormEvent, useState } from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import Input from "./style-components/Input";
import Button from "./style-components/Button";

// TODO: extract input group into style component
// TODO: create button style component
// TODO: make inputs controlled
// TODO: use fetch API in useEffect to send form data to backend
// TODO: extract fetch to useFetch hook
// TODO: replace useFetch hook with a proper package
// (just want to implement it by hand to learn it)

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
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
    </SectionContainer>
  );
};

export default LoginPage;
