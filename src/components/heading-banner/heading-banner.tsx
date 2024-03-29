"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bubbles } from "#/components/bubbles";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

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
  const { scrollYProgress } = useScroll();
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -1400]);
  const opacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    // eslint-disable-next-line tailwindcss/no-arbitrary-value
    <div className="sticky top-[calc(-400px+64px)] z-20 -mt-16 flex h-[400px] flex-row items-center overflow-hidden bg-primary text-white transition-colors dark:bg-primary-dark">
      <Bubbles bubbles={bubbles} />

      <Wrap className="flex flex-col items-center">
        <motion.div
          className="text-center"
          style={{ opacity, translateY: headingY }}
        >
          <Heading text={heading} type="h1" />
        </motion.div>

        <Spacer size="small" />

        <motion.div
          className="text-center"
          style={{ opacity, translateY: descriptionY }}
        >
          <p className="text-xl font-medium">{description}</p>
        </motion.div>
      </Wrap>
    </div>
  );
};
