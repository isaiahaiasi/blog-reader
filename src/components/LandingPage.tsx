import React, { FC } from "react";
import Header from "./Header";

import "../styles/header.css";

const LandingPage: FC = () => {
  return (
    <div className="max-w-prose">
      <Header text="Blogstream" />
      <div>Welcome to my landing page!</div>
    </div>
  );
};

export default LandingPage;
