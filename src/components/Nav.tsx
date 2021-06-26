import React from "react";

interface NavProps {
  navItems: JSX.Element[];
}

const Nav = ({ navItems }: NavProps) => {
  return (
    <nav>
      <ul className="p-2 flex justify-between">
        {navItems.map((navItem, i) => (
          <li key={i}> {navItem} </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
