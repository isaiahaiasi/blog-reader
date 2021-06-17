import React, { FC } from "react";

const Main: FC = ({ children }) => (
  <>
    <main className="flex flex-col items-center pr-2 pl-2">{children}</main>
  </>
);

export default Main;
