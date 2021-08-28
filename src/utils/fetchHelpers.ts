import { UserData } from "../contexts/UserContext";

// eslint-disable-next-line import/prefer-default-export
export function tryGetAuthHeader(userData: UserData) {
  return userData.token ? { Authorization: `Bearer ${userData.token}` } : {};
}
