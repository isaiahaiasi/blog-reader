import React, { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <div>
      <ul className="p-2 flex justify-between">
        <li>
          <Link to="/stream">My Stream</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
