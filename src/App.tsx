import React, { FC, useEffect, useState } from "react";
import BlogRouter from "./components/BlogRouter";

export const UserContext = React.createContext(null);

const USER_KEY = "USER_INFO";

const App: FC = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)));

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
