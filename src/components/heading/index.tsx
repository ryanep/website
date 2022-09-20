import * as styled from "./styles";
import { HeadingProps } from "./types";

export const Heading = ({ as, type, text }: HeadingProps) => {
  return (
    <styled.Heading as={as ?? type} type={type}>
      {text}
    </styled.Heading>
  );
};
