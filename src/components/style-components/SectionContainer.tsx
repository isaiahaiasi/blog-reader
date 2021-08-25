import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: SectionContainerProps) => (
  <div className="section-container pt-2 pb-2">
    <section
      className={`relative p-8 bg-white bg-opacity-90 shadow-lg rounded-md ${className}`}
    >
      {children}
    </section>
  </div>
);

export default SectionContainer;
