import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { LogoBannerProps } from "./types";

export const IconBanner = ({
  heading,
  description,
  items,
}: LogoBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Icons>
          {items.map(({ node }) => (
            <styled.Icon colour={node.colour} key={node.id} name={node.name}>
              <styled.IconImage
                alt={node.icon.title}
                src={node.icon.file.url}
                width="20"
              />
            </styled.Icon>
          ))}
        </styled.Icons>
      </Wrap>
    </Section>
  );
};
