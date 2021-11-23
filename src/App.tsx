import React, { FC } from "react";
import BlogRouter from "./components/BlogRouter";
import Footer from "./components/Footer";
import GithubLink from "./components/GithubLink";
import UserContext, { NullableUserData } from "./contexts/UserContext";
import useStickyState from "./hooks/useStickyState";

const USER_KEY = "USER_INFO";

const App: FC = () => {
  const [user, setUser] = useStickyState<NullableUserData>(null, USER_KEY);

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
