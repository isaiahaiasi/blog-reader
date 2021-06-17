import React, { FC } from "react";

const Nav: FC = () => {
  return (
    <div>
      <ul className="p-2 flex justify-between">
        <li>My Feed</li>
        <li>Discover</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Nav;
