import React, { FC, useEffect, useState } from "react";
import BlogRouter from "./components/BlogRouter";
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
      <div className="text-xl text-gray-900">
        <BlogRouter />
      </div>
    </UserContext.Provider>
  );
};

export default App;
