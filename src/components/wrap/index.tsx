import * as styled from "./styles";
import { WrapProps } from "./types";

export const Wrap = ({ className, children }: WrapProps) => {
  // eslint-disable-next-line react/forbid-component-props
  return <styled.Wrap className={className}>{children}</styled.Wrap>;
};
