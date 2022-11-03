import { Bubbles } from "#/components/bubbles/bubbles";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { HeadingBannerProps } from "./types";

export const HeadingBanner = ({ heading, description }: HeadingBannerProps) => {
  return (
    <div className="flex sticky z-20 flex-row items-center h-[400px] overflow-hidden bg-primary dark:bg-primary-dark text-white top-[calc(-400px+64px)] transition-colors">
      <Bubbles bubbleCount={20} />

      <Wrap className="flex flex-col items-center">
        <Heading text={heading} type="h1" />
        <Spacer size="small" />

        <p className="text-lg">{description}</p>
      </Wrap>
    </div>
  );
};
