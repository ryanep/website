import { ButtonProps } from "./types";
import * as styled from "./styles";

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <styled.Button onClick={onClick} type={type}>
      {text}
    </styled.Button>
  );
};
