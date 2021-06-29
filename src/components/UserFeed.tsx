import React, { useContext } from "react";
import useFetch from "use-http";
import { UserContext } from "../App";
import { USER_ROUTE } from "../utils/apiRoutes";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import UserCard from "./style-components/UserCard";

const UserFeed = () => {
  const [userToken] = useContext(UserContext);

  const {
    loading,
    error,
    data: users,
  } = useFetch(
    USER_ROUTE,
    { headers: { Authorization: `Bearer ${userToken}` } },
    []
  );

  return (
    <SectionContainer>
      <Header text="Users:" />
      {loading && <p>Loading user list...</p>}
      {error && <p>ERROR: {JSON.stringify(error)}</p>}
      {users && (
        <div className="flex flex-col gap-2 p-2">
          {typeof users.map !== "undefined" &&
            users.map((user: any) => <UserCard user={user} key={user._id} />)}
        </div>
      )}
    </SectionContainer>
  );
};

export default UserFeed;
