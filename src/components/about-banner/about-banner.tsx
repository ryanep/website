import { Heading } from "#/components/heading";
import { Markdown } from "#/components/markdown";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import type { AboutBannerProps } from "./types";

export const AboutBanner = ({
  heading,
  description,
  image,
}: AboutBannerProps) => {
  return (
    <Section>
      <Wrap>
        <img
          alt={image.title}
          className="inline-block h-32 w-32 rounded-full"
          src={image.url}
        />
        <Spacer size="small" />

        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <div className="mx-auto max-w-4xl">
          <Markdown source={description} />
        </div>
      </Wrap>
    </Section>
  );
};
