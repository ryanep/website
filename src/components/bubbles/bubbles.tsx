import { cx } from "classix";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useState } from "react";

interface BubblesProps {
  readonly bubbles: {
    id: number;
    left: number;
    size: number;
    top: number;
  }[];
}

export const Bubbles = ({ bubbles }: BubblesProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    setScrollProgress(Math.min(latestValue / 0.15, 1));
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 mx-auto size-full -translate-x-1/2 overflow-hidden"
    >
      {bubbles.map((bubble) => {
        const drift = 8 + bubble.size * 2;
        const duration = 9 + (bubble.id % 5) * 2;
        const direction = bubble.id % 2 === 0 ? 1 : -1;
        const rotation = direction * (2 + (bubble.id % 4) * 2);
        const scale = 0.8 + bubble.size * 0.06;
        const movement = shouldReduceMotion ? 0 : scrollProgress * 48;
        const disperseX = ((bubble.left - 50) / 50) * movement;
        const disperseY = ((bubble.top - 50) / 50) * movement;

        return (
          <motion.div
            className={cx("absolute", bubble.id > 6 && "hidden md:block")}
            key={bubble.id}
            style={{
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              x: disperseX,
              y: disperseY,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [rotation, rotation + direction * 4, rotation],
                      x: [0, direction * drift, 0],
                      y: [0, -drift, 0],
                    }
              }
              className="size-16 rounded-sm bg-black opacity-10"
              style={{ rotate: rotation, scale }}
              transition={{
                duration,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
