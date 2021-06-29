import React, { FC, useEffect, useState } from "react";
import RouterLoggedIn from "./components/RouterLoggedIn";
import RouterLoggedOut from "./components/RouterLoggedOut";

export const UserContext = React.createContext(null);

const TOKEN_KEY = "USER_TOKEN";

// TODO: make this a tad more secure!
const storeToken = (token: string, tokenKey: string): void => {
  console.log(token, "storing token...");
  if (token) {
    localStorage.setItem(tokenKey, token);
    console.log("saved!");
  }
};

const App: FC = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem(TOKEN_KEY));

  useEffect(() => {
    storeToken(userToken, TOKEN_KEY);
  }, [userToken]);

  return (
    <UserContext.Provider value={[userToken, setUserToken]}>
      <div className="text-xl text-gray-900">
        {userToken ? <RouterLoggedIn /> : <RouterLoggedOut />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
