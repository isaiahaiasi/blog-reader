import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./style-components/Main";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import LandingPage from "./LandingPage";

const RouterLoggedOut: FC = () => {
  return (
    <Router>
      <Nav
        navItems={[
          <Link to="/discover">Discover</Link>,
          <Link to="/login">Login</Link>,
          <Link to="/register">Register</Link>,
        ]}
      />
      <Main>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/discover">
            <LandingPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
};

export default RouterLoggedOut;
