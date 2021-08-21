import React, { FC, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./style-components/Main";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import UserContext from "../contexts/UserContext";
import DiscoverFeed from "./DiscoverFeed";
import MyBlog from "./MyBlog";
import { ROUTER_USER_FEED_BASE } from "../utils/routes";
import UserFeed from "./UserFeed";

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
            <DiscoverFeed />
          </Route>
          <Route path="/myblog">
            <MyBlog />
          </Route>
          <Route path="/logout">
            <LoginPage />
          </Route>
          <Route path={`${ROUTER_USER_FEED_BASE}/:userid`}>
            <UserFeed />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
};

export default RouterLoggedOut;
