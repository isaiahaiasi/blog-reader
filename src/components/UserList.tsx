import React, { useContext } from "react";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { API_USER } from "../utils/routes";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import UserCard from "./style-components/UserCard";

const UserList = () => {
  const [user] = useContext(UserContext);

  const {
    loading,
    error,
    data: users,
  } = useFetch(
    API_USER,
    user?.token ? { headers: { Authorization: `Bearer ${user.token}` } } : {},
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
            users.map((u: any) => <UserCard user={u} key={u._id} />)}
        </div>
      )}
    </SectionContainer>
  );
};

export default UserList;
