import React from 'react';
import { BubblesProps } from './types';
import * as styled from './styles';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * max - min + min);
};

const generateBubbles = (bubblesCount: number) => {
  const bubbles = Array.from(Array(bubblesCount));
  return bubbles.map((element, index) => ({
    id: index,
    left: getRandomNumber(1, 1920),
    top: getRandomNumber(1, 350),
    size: getRandomNumber(1, 6)
  }));
};

export const Bubbles: React.FC<BubblesProps> = ({ bubbleCount }) => {
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
