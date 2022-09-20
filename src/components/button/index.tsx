import * as styled from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <styled.Button onClick={onClick} type={type}>
      {text}
    </styled.Button>
  );
};
