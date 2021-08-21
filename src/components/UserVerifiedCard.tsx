import React, { useContext } from "react";
import useFetch from "use-http";
import UserContext from "../contexts/UserContext";
import { USER_ROUTE } from "../utils/apiRoutes";
import Header from "./style-components/Header";
import SectionContainer from "./style-components/SectionContainer";
import SectionContent from "./style-components/SectionContent";
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
        <SectionContent>
          If {userData.user.username} is verified, their user card will appear
          below:
        </SectionContent>
      )}
      {loading && <p>Loading user list...</p>}
      {error && (
        <>
          <p>STATUS: {error.name}</p>
          <p>ERROR MESSAGE: {JSON.stringify(user)}</p>
        </>
      )}
      {user && <UserCard user={user} key={user._id} />}
    </SectionContainer>
  );
};

export default UserVerifiedCard;
