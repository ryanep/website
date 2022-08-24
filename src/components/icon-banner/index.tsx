import { Wrap } from "#/components/wrap";
import { Spacer } from "#/components/spacer";
import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { LogoBannerProps } from "./types";
import * as styled from "./styles";

export const IconBanner = ({
  heading,
  description,
  items,
}: LogoBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading type="h2" text={heading} />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Icons>
          {items.map(({ node }) => (
            <styled.Icon key={node.id} name={node.name} colour={node.colour}>
              <styled.IconImage
                src={node.icon.file.url}
                alt={node.icon.title}
                width="20"
              />
            </styled.Icon>
          ))}
        </styled.Icons>
      </Wrap>
    </Section>
  );
};
