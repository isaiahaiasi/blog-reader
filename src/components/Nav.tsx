import React from "react";

interface NavProps {
  navItems: JSX.Element[];
}

const Nav = ({ navItems }: NavProps) => (
  <nav className="flex w-full justify-center mt-4 mb-4">
    <ul className="p-4 flex justify-around bg-white bg-opacity-90 max-w-prose w-full rounded-md shadow-lg">
      {navItems.map((navItem, i) => (
        // (this list is not dynamic, index should be fine)
        // eslint-disable-next-line react/no-array-index-key
        <li key={i} className="header text-2xl">
          {navItem}
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
