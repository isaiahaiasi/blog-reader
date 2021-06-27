import React from "react";
import useFetch from "use-http";
import { USER_ROUTE } from "../utils/apiRoutes";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import UserCard from "./style-components/UserCard";

const UserFeed = () => {
  const { loading, error, data: users } = useFetch(USER_ROUTE, {}, []);
  return (
    <SectionContainer>
      <Header text="Users:" />
      {loading && <p>Loading user list...</p>}
      {error && <p>{JSON.stringify(error)}</p>}
      {users && (
        <div className="flex flex-col gap-2 p-2">
          {users.map((user: any) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>
      )}
    </SectionContainer>
  );
};

export default UserFeed;
