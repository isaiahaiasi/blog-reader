/* eslint-disable react/button-has-type */
// I like this rule as a reminder, but not being able to
// pass the button type as a prop is unnecessary, given typechecking

import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: ButtonProps) => {
  const { children, type } = props;
  return (
    <button type={type} className="bg-blue-500 text-white relative p-2">
      {children}
    </button>
  );
};

export default Button;
