import React, { FormEvent, useState } from "react";
import { Redirect } from "react-router-dom";
import useFetch from "use-http";
import { API_REGISTER } from "../../utils/routes";
import Error from "../Error";
import Button from "../style-components/Button";
import Header from "../style-components/Header";
import Input from "../style-components/Input";
import SectionContainer from "../style-components/SectionContainer";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isRedirectActive, setIsRedirectActive] = useState(false);

  const { post, error, response } = useFetch(API_REGISTER);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = { username, password, passwordConfirm };
    const postResponse = await post(body);

    if (response.ok && !error) {
      console.log(postResponse);
      setIsRedirectActive(true);
    }
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
      {error && <Error error={error} />}
      {isRedirectActive && <Redirect to="/login" />}
    </SectionContainer>
  );
};

export default RegistrationPage;
