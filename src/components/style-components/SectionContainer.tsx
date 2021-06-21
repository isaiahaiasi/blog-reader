import React, { FC } from "react";
import Border from "./Border";

const SectionContainer: FC = ({ children }) => {
  return (
    <div className="section-container pt-2 pb-2">
      <section className="relative p-8 bg-white bg-opacity-90 shadow-lg">
        <Border className="m-4" />
        {children}
      </section>
    </div>
  );
};

export default SectionContainer;
