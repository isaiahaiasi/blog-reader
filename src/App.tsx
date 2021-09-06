import React, { FC, useEffect, useState } from "react";
import BlogRouter from "./components/BlogRouter";
import Footer from "./components/Footer";
import GithubLink from "./components/GithubLink";
import UserContext, { UserData } from "./contexts/UserContext";

const USER_KEY = "USER_INFO";

const App: FC = () => {
  const [user, setUser] = useState<UserData | undefined>();

  useEffect(() => {
    console.log("uE [] begin");
    const storedUser = localStorage.getItem(USER_KEY);
    if (typeof storedUser !== "undefined") {
      console.log("uE [] NOT undefined, setting user FROM localStorage");
      console.log("user:", storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    console.log("uE [user] begin");
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      console.log("user is defined:", user);
    } else {
      console.log("user is undefined");
    }
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
