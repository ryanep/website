import { motion, useScroll, useTransform } from "framer-motion";
import { Bubbles } from "#/components/bubbles/bubbles";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { HeadingBannerProps } from "./types";

export const HeadingBanner = ({ heading, description }: HeadingBannerProps) => {
  const { scrollYProgress } = useScroll();
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -1400]);
  const opacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <div className="flex sticky z-20 flex-row items-center h-[400px] overflow-hidden bg-primary dark:bg-primary-dark text-white top-[calc(-400px+64px)] transition-colors">
      <Bubbles bubbleCount={20} />

      <Wrap className="flex flex-col items-center">
        <motion.div
          className="text-center"
          style={{ translateY: headingY, opacity }}
        >
          <Heading text={heading} type="h1" />
        </motion.div>

        <Spacer size="small" />

        <motion.div
          className="text-center"
          style={{ translateY: descriptionY, opacity }}
        >
          <p className="text-lg">{description}</p>
        </motion.div>
      </Wrap>
    </div>
  );
};
