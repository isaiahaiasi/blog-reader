import React, { FormEvent, useState } from "react";
import Button from "./style-components/Button";
import Header from "./style-components/Header";
import Input from "./style-components/Input";
import SectionContainer from "./style-components/SectionContainer";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleFormSubmit = (e: FormEvent) => {};

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
