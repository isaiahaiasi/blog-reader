import React, { FC } from "react";

const SectionContainer: FC = ({ children }) => {
  return (
    <section className="p-4 border-2 rounded-lg border-solid border-red-400 bg-gray-50 bg-opacity-50">
      {children}
    </section>
  );
};

export default SectionContainer;
