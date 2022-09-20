import { generateBubbles } from "#/utils/bubbles";
import * as styled from "./styles";
import { BubblesProps } from "./types";

export const Bubbles = ({ bubbleCount }: BubblesProps) => {
  const bubbles = generateBubbles(bubbleCount);

  return (
    <styled.Bubbles>
      {bubbles.map((bubble) => (
        <styled.Bubble
          key={bubble.id}
          left={bubble.left}
          size={bubble.size}
          top={bubble.top}
        />
      ))}
    </styled.Bubbles>
  );
};
