import React, { FC, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./style-components/Main";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import { UserContext } from "../App";
import LandingPage from "./Discover";
import MyBlog from "./MyBlog";

const RouterLoggedOut: FC = () => {
  const [user] = useContext(UserContext);
  return (
    <Router>
      {user ? (
        <Nav
          navItems={[
            <Link to="/myblog">My Blog</Link>,
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
          <Route path="/myblog">
            <MyBlog />
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
