import React, { FormEvent, useState } from "react";
import useFetch from "use-http";
import { REGISTER_ROUTE } from "../utils/apiRoutes";
import Button from "./style-components/Button";
import Header from "./style-components/Header";
import Input from "./style-components/Input";
import SectionContainer from "./style-components/SectionContainer";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { post, response } = useFetch(REGISTER_ROUTE);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = { username, password, passwordConfirm };
    const postResponse = await post(body);

    if (!response.ok) {
      console.log("uh oh!");
      // TODO: render errors
    }

    console.log(postResponse);
    // TODO: redirect
  };

  return (
    <SectionContainer>
      <Header text="Register" />
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
        <Input
          type="password"
          label="Confirm Password:"
          value={passwordConfirm}
          name="password-confirm"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
        <Button type="submit">Log in</Button>
      </form>
    </SectionContainer>
  );
};

export default RegistrationPage;
