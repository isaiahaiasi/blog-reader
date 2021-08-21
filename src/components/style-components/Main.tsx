import React, { FC } from "react";
import "../../styles/custom-styles.css";

const Main: FC = ({ children }: { children: React.ReactNode }) => (
  <main className="relative flex flex-col items-center pr-2 pl-2">
    <div className="gradient-bg" />
    {children}
  </main>
);

export default Main;
