import * as styled from "./styles";
import { InputProps } from "./types";

export const Input = ({
  id,
  type,
  name,
  title,
  onChange,
  required,
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <styled.Label>{title}</styled.Label>
      <styled.Input
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
      />
    </label>
  );
};
