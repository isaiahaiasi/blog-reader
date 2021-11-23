import React from "react";
import { ApiUser } from "../utils/dataInterfaces";

export type NullableUserData = ApiUser | null;

const UserContext: React.Context<
  [NullableUserData, React.Dispatch<NullableUserData>] | null
> = React.createContext(null);

export default UserContext;
