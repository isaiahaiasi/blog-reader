import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AnimatedEllipses from "../AnimatedEllipses";
import SectionContainer from "../style-components/SectionContainer";

const LogoutPage = () => {
  const [userData, setUserData] = useContext(UserContext);

  // Handle delay for redirect
  const [isTimeoutComplete, setIsTimeoutComplete] = useState(false);
  const timeoutTime = 6000; // in milliseconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserData(undefined);

      setIsTimeoutComplete(true);
    }, timeoutTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-prose">
      <SectionContainer className="bg-yellow-100 text-yellow-900">
        <h1 className="text-4xl font-bold">Log out</h1>
        <p>
          Logging out. You will be redirected shortly
          <AnimatedEllipses intervalTime={600} />
        </p>
      </SectionContainer>
      {(isTimeoutComplete || !userData || !userData.token) && (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default LogoutPage;
