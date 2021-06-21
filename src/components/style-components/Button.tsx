import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={"bg-blue-500 text-white relative p-2"}>
      {props.children}
    </button>
  );
};

export default Button;
