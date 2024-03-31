import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Markdown } from "#/components/markdown";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

interface AboutBannerProps {
  readonly description: string;
  readonly heading: string;
  readonly image: {
    title: string;
    url: string;
  };
}

export const AboutBanner = ({
  description,
  heading,
  image,
}: AboutBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Image
          alt={image.title}
          className="inline-block size-32 rounded-full"
          height={128}
          src={image.url}
          width={128}
        />
        <Spacer size="small" />

        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <div className="mx-auto max-w-4xl text-lg font-medium">
          <Markdown source={description} />
        </div>
      </Wrap>
    </Section>
  );
};
