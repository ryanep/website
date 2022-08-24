import { InputProps } from "./types";
import * as styled from "./styles";

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
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};
