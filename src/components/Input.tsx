import React from "react";

type InputProps = {
    type: string
    value?: string
    placeholder: string
    name: string
    className: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => (
  <input
    type={props.type}
    value={props.value}
    name={props.name}
    placeholder={props.placeholder}
    className={props.className}
    onChange={props.onChange}
  />
);

export default Input;
