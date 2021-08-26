import React from "react";
import SectionContainer from "../style-components/SectionContainer";

const NotFoundPage = () => (
  <div className="w-full max-w-prose">
    <SectionContainer className="text-yellow-900 bg-yellow-100">
      <p>
        <b>Uh-oh! :S</b>
      </p>
      <p>
        404: <i>Page not found...</i>
      </p>
    </SectionContainer>
  </div>
);

export default NotFoundPage;
