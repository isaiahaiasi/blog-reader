import React, { useContext } from "react";
import useFetch from "use-http";
import { UserContext } from "../App";
import { USER_ROUTE } from "../utils/apiRoutes";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import UserCard from "./style-components/UserCard";

// ! TEMP
// This is basically just a demo component to test user-specific auth
// (eg, confirming that the person attempting to edit a user is that user)

const UserVerifiedCard = () => {
  const [userData] = useContext(UserContext);

  const {
    loading,
    error,
    data: user,
  } = useFetch(
    `${USER_ROUTE}/${userData?.user._id}`,
    userData?.token
      ? { headers: { Authorization: `Bearer ${userData.token}` } }
      : {},
    []
  );

  return (
    <SectionContainer>
      <Header text="Verified User:" />
      {userData?.user && (
        <p>
          If {userData.user.username} is verified, their user card will appear
          below:
        </p>
      )}
      {loading && <p>Loading user list...</p>}
      {error && (
        <>
          <p>STATUS: {error.name}</p>
          <p>ERROR MESSAGE: {JSON.stringify(user)}</p>
        </>
      )}
      {user && (
        <div className="flex flex-col gap-2 p-2">
          <UserCard user={user} key={user._id} />
        </div>
      )}
    </SectionContainer>
  );
};

export default UserVerifiedCard;
