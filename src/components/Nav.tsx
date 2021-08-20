import React from "react";

interface NavProps {
  navItems: JSX.Element[];
}

const Nav = ({ navItems }: NavProps) => {
  return (
    <nav className="flex w-full justify-center mt-4 mb-4">
      <ul className="p-4 flex justify-around bg-white bg-opacity-90 max-w-prose w-full rounded-md">
        {navItems.map((navItem, i) => (
          <li key={i} className="header text-2xl">
            {navItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
