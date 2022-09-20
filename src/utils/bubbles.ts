import { getRandomNumber } from "#/utils/number";

export const generateBubbles = (bubblesCount: number) => {
  const bubbles = [...(new Array(bubblesCount) as [undefined])];

  return bubbles.map((element, index) => {
    return {
      id: index,
      left: getRandomNumber(1, 1920),
      top: getRandomNumber(1, 350),
      size: getRandomNumber(1, 6),
    };
  });
};
