import React from "react";

const UserContext: React.Context<[any, React.Dispatch<any>] | null> =
  React.createContext(null);

export default UserContext;
