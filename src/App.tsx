import React, { FC, useEffect, useState } from "react";
import BlogRouter from "./components/BlogRouter";

export const UserContext = React.createContext(null);

const TOKEN_KEY = "USER_TOKEN";
const storeToken = (token: string, tokenKey: string): void => {
  if (token) {
    localStorage.setItem(tokenKey, token);
    console.log(token);
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
        <BlogRouter />
      </div>
    </UserContext.Provider>
  );
};

export default App;
