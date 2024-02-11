import { generateBubbles } from "#/utils/bubbles";

interface BubblesProps {
  readonly bubbleCount: number;
}

export const Bubbles = ({ bubbleCount }: BubblesProps) => {
  const bubbles = generateBubbles(bubbleCount);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 mx-auto size-full -translate-x-1/2 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          className="absolute size-16 rounded-sm bg-black opacity-10"
          key={bubble.id}
          style={{ left: bubble.left, top: bubble.top }}
        />
      ))}
    </div>
  );
};
