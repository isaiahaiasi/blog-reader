import React, { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  label: string;
  name: string;
  id?: string;
  value: string | number; // not sure what types I need to cover all cases...
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, label, name, id, value, onChange }: InputProps) => {
  return (
    <div className="p-2 flex flex-col">
      <label htmlFor={name} className="pr-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id ?? name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
