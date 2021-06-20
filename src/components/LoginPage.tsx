import React, { FormEvent } from "react";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";

// TODO: extract input group into style component
// TODO: create button style component
// TODO: make inputs controlled
// TODO: use fetch API in useEffect to send form data to backend
// TODO: extract fetch to useFetch hook
// TODO: replace useFetch hook with a proper package
// (just want to implement it by hand to learn it)

const LoginPage = () => {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <SectionContainer>
      <Header text="Log in" />
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </SectionContainer>
  );
};

export default LoginPage;
