import * as styled from "./styles";
import type { SectionProps } from "./types";

export const Section = ({ children }: SectionProps) => {
  return <styled.Section>{children}</styled.Section>;
};
