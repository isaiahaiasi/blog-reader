import React, { FC, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./style-components/Main";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import { UserContext } from "../App";
import LandingPage from "./LandingPage";

const RouterLoggedOut: FC = () => {
  const [userToken] = useContext(UserContext);
  return (
    <Router>
      {userToken ? (
        <Nav
          navItems={[
            <Link to="/stream">My Stream</Link>,
            <Link to="/discover">Discover</Link>,
            <Link to="/logout">Logout</Link>,
          ]}
        />
      ) : (
        <Nav
          navItems={[
            <Link to="/login">Login</Link>,
            <Link to="/register">Register</Link>,
          ]}
        />
      )}

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
          <Route path="/logout">
            <LoginPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
};

export default RouterLoggedOut;
