import { getRandomNumber } from '~/utils/number';

export const generateBubbles = (bubblesCount: number) => {
  const bubbles = Array.from(Array(bubblesCount));

  return bubbles.map((element, index) => {
    return {
      id: index,
      left: getRandomNumber(1, 1920),
      top: getRandomNumber(1, 350),
      size: getRandomNumber(1, 6),
    };
  });
};
