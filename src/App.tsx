import React, { FC, useEffect, useState } from "react";
import BlogRouter from "./components/BlogRouter";
import Footer from "./components/Footer";
import GithubLink from "./components/GithubLink";
import UserContext, { UserData } from "./contexts/UserContext";

const USER_KEY = "USER_INFO";

const App: FC = () => {
  const [user, setUser] = useState<UserData | undefined>();

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    if (storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="h-full flex flex-col text-xl text-gray-900">
        <BlogRouter />
        <Footer>
          <GithubLink />
        </Footer>
      </div>
    </UserContext.Provider>
  );
};

export default App;
