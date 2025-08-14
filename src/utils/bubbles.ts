import { getRandomNumber } from "#/utils/number";

export const generateBubbles = (bubblesCount: number) => {
  const bubbles = Array.from({ length: bubblesCount });

  return bubbles.map((_, index) => {
    return {
      id: index,
      left: getRandomNumber(1, 1920),
      size: getRandomNumber(1, 6),
      top: getRandomNumber(1, 350),
    };
  });
};
