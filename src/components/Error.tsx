import React from "react";
import SectionContainer from "./style-components/SectionContainer";

interface ErrorProps {
  error?: Error;
  message?: string;
}

const Error = ({ error, message }: ErrorProps) => (
  <SectionContainer className="bg-red-300 text-red-900">
    <p>
      <b>{error?.name}</b>
    </p>
    <p>{error?.message}</p>
    {message && <p>{message}</p>}
  </SectionContainer>
);

export default Error;
