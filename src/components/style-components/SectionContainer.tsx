import React, { FC } from "react";

const SectionContainer: FC = ({ children }: { children: React.ReactNode }) => (
  <div className="section-container pt-2 pb-2">
    <section className="relative p-8 bg-white bg-opacity-90 shadow-lg rounded-md">
      {children}
    </section>
  </div>
);

export default SectionContainer;
