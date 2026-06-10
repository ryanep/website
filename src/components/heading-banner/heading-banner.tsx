"use client";
import dynamic from "next/dynamic";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

const Bubbles = dynamic(
  () =>
    import("#/components/bubbles").then((bubbleModule) => bubbleModule.Bubbles),
  { ssr: false }
);

interface HeadingBannerProps {
  readonly bubbles: {
    id: number;
    left: number;
    size: number;
    top: number;
  }[];
  readonly description: string;
  readonly heading: string;
}

export const HeadingBanner = ({
  bubbles,
  description,
  heading,
}: HeadingBannerProps) => {
  return (
    <div className="sticky flex h-[400px] flex-row items-center overflow-hidden bg-primary text-white transition-colors dark:bg-primary-dark">
      <Bubbles bubbles={bubbles} />

      <Wrap className="flex flex-col items-center">
        <div className="text-center">
          <Heading text={heading} type="h1" />
        </div>

        <Spacer size="small" />

        <div className="text-center">
          <p className="text-xl font-medium">{description}</p>
        </div>
      </Wrap>
    </div>
  );
};
