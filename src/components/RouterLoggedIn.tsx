import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./style-components/Main";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";

import React, { FC } from "react";

const RouterLoggedIn: FC = () => {
  return (
    <Router>
      <Nav
        navItems={[
          <Link to="/stream">My Stream</Link>,
          <Link to="/discover">Discover</Link>,
          <Link to="/logout">Login</Link>,
        ]}
      />
      <Main>
        <Switch>
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

export default RouterLoggedIn;
