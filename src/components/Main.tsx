import React, { FC } from "react";

const Main: FC = ({ children }) => (
  <main className="flex flex-col items-center pr-2 pl-2">
    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 mix-blend-multiply" />
    {children}
  </main>
);

export default Main;
