import React, { FC, useState } from "react";
import RouterLoggedIn from "./components/RouterLoggedIn";
import RouterLoggedOut from "./components/RouterLoggedOut";

const App: FC = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="text-xl text-gray-900">
      {user ? <RouterLoggedIn /> : <RouterLoggedOut />}
    </div>
  );
};

export default App;
