import { Bubbles } from "#/components/bubbles";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import * as styled from "./styles";
import { HeadingBannerProps } from "./types";

export const HeadingBanner = ({ heading, description }: HeadingBannerProps) => {
  return (
    <styled.Banner>
      <Bubbles bubbleCount={20} />
      <styled.Container>
        <Heading text={heading} type="h1" />
        <Spacer size="small" />

        <styled.Description>{description}</styled.Description>
      </styled.Container>
    </styled.Banner>
  );
};
