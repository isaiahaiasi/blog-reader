import React from "react";

const ErrorMessage = (error: any) => {
  return (
    <div>
      <p>ERROR</p>
      <p>
        {error.status}: {error.statusText}
      </p>
    </div>
  );
};

export default ErrorMessage;
