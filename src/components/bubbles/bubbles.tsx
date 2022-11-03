import { generateBubbles } from "#/utils/bubbles";
import { BubblesProps } from "./types";

export const Bubbles = ({ bubbleCount }: BubblesProps) => {
  const bubbles = generateBubbles(bubbleCount);

  return (
    <div className="absolute top-0 left-1/2 w-[1920px] h-full overflow-hidden pointer-events-none -translate-x-1/2">
      {bubbles.map((bubble) => (
        <div
          className="absolute w-16 h-16 rounded-sm bg-black opacity-10"
          key={bubble.id}
          style={{ left: bubble.left, top: bubble.top }}
        />
      ))}
    </div>
  );
};
