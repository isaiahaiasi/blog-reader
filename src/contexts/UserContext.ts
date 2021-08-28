import React from "react";
import { ApiUser } from "../utils/dataInterfaces";

export interface UserData {
  user: ApiUser;
  token: string;
}

type NullableUserData = UserData | undefined;

const UserContext: React.Context<
  [NullableUserData, React.Dispatch<NullableUserData>] | null
> = React.createContext(null);

export default UserContext;
