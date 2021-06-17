import React, { FC } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";

const App: FC = () => (
  <div className="text-xl">
    <Nav />
    <Main>
      <LandingPage />
    </Main>
    <Footer />
  </div>
);

export default App;
