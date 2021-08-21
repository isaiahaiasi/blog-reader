import React, { FC } from "react";

const SectionContent: FC = ({ children }: { children: React.ReactNode }) => (
  <div className="section-content pt-4 pb-4">{children}</div>
);

export default SectionContent;
