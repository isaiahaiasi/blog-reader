import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/style-components/Main";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

const App: FC = () => (
  <div className="text-xl text-gray-900">
    <Router>
      <Nav />
      <Main>
        <Switch>
          <Route path="/discover">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  </div>
);

export default App;
