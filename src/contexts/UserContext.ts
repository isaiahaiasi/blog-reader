import React from "react";
import { ApiUser } from "../utils/dataInterfaces";

interface UserData {
  user: ApiUser;
  token: string;
}

const UserContext: React.Context<[UserData, React.Dispatch<UserData>] | null> =
  React.createContext(null);

export default UserContext;
