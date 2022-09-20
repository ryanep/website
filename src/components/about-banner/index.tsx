import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { AboutBannerProps } from "./types";

export const AboutBanner = ({
  heading,
  description,
  image,
}: AboutBannerProps) => {
  return (
    <Section>
      <Wrap>
        <styled.Image alt={image.title} src={image.url} />
        <Spacer size="small" />

        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <styled.Description source={description} />
      </Wrap>
    </Section>
  );
};
