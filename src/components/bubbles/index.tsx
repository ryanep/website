import { generateBubbles } from '#/utils/bubbles';
import { BubblesProps } from './types';
import * as styled from './styles';

export const Bubbles = ({ bubbleCount }: BubblesProps) => {
  const bubbles = generateBubbles(bubbleCount);

  return (
    <styled.Bubbles>
      {bubbles.map((bubble) => (
        <styled.Bubble
          key={bubble.id}
          left={bubble.left}
          top={bubble.top}
          size={bubble.size}
        />
      ))}
    </styled.Bubbles>
  );
};
