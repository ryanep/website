import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Bubbles } from "#/components/bubbles";
import { HeadingBannerProps } from "./types";
import * as styled from "./styles";

export const HeadingBanner = ({ heading, description }: HeadingBannerProps) => {
  return (
    <styled.Banner>
      <Bubbles bubbleCount={20} />
      <styled.Container>
        <Heading type="h1" text={heading} />
        <Spacer size="small" />

        <styled.Description>{description}</styled.Description>
      </styled.Container>
    </styled.Banner>
  );
};
