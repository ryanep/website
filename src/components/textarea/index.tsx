import * as styled from "./styles";
import { TextareaProps } from "./types";

export const Textarea = ({
  id,
  name,
  title,
  rows = 5,
  onChange,
  required,
}: TextareaProps) => {
  return (
    <label htmlFor={id}>
      <styled.Label>{title}</styled.Label>
      <styled.Textarea
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </label>
  );
};
