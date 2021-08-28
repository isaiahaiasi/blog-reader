import React, { FC, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ROUTER_POST, ROUTER_USER_FEED_BASE } from "../utils/routes";
import Nav from "./Nav";
import Main from "./style-components/Main";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserContext from "../contexts/UserContext";
import DiscoverFeed from "./pages/DiscoverFeed";
import MyBlog from "./pages/MyBlog";
import UserFeed from "./pages/UserFeed";
import FullBlogPost from "./pages/FullBlogPost";
import NotFoundPage from "./pages/NotFoundPage";
import LogoutPage from "./pages/LogoutPage";

const BlogRouter: FC = () => {
  const [user] = useContext(UserContext);
  return (
    // outer container required for sticky flex-based footer
    <div className="content flex-auto flex-shrink-0">
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
            <Route exact path="/">
              {user ? <Redirect to="/discover" /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegistrationPage />
            </Route>
            <Route exact path="/discover">
              <DiscoverFeed />
            </Route>
            <Route exact path="/myblog">
              <MyBlog />
            </Route>
            <Route exact path="/logout">
              <LogoutPage />
            </Route>
            <Route exact path={`${ROUTER_USER_FEED_BASE}/:userid`}>
              <UserFeed />
            </Route>
            <Route exact path={`${ROUTER_POST}/:postid`}>
              <FullBlogPost />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Main>
      </Router>
    </div>
  );
};

export default BlogRouter;
