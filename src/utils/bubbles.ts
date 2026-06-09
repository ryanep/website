import { getRandomNumber } from "#/utils/number";

const MOBILE_BUBBLE_COUNT = 7;

/**
 * Generates randomized bubble positions within a grid so they stay visually
 * distributed, while prioritizing one mobile-visible bubble per row.
 */
export const generateBubbles = (bubblesCount: number) => {
  if (bubblesCount <= 0) {
    return [];
  }

  const columns = Math.ceil(Math.sqrt(bubblesCount * 2));
  const rows = Math.ceil(bubblesCount / columns);
  const totalCells = rows * columns;
  const shuffledCells = Array.from({ length: totalCells }, (_, index) => index);

  for (let index = shuffledCells.length - 1; index > 0; index--) {
    const swapIndex = getRandomNumber(0, index + 1);
    const currentCell = shuffledCells[index];
    const swapCell = shuffledCells[swapIndex];

    shuffledCells[index] = swapCell;
    shuffledCells[swapIndex] = currentCell;
  }

  const cellsByRow = Array.from({ length: rows }, (): number[] => []);

  for (const cell of shuffledCells) {
    const row = Math.floor(cell / columns);

    cellsByRow[row]?.push(cell);
  }

  const mobileBubbleCount = Math.min(MOBILE_BUBBLE_COUNT, bubblesCount);
  const mobileCells: number[] = [];
  const mobileCellSet = new Set<number>();

  for (let index = 0; index < mobileBubbleCount; index++) {
    const targetRow = index % rows;
    const cell = cellsByRow[targetRow]?.pop();

    if (cell !== undefined) {
      mobileCells.push(cell);
      mobileCellSet.add(cell);
    }
  }

  const selectedCells = [
    ...mobileCells,
    ...shuffledCells.filter((cell) => !mobileCellSet.has(cell)),
  ];
  const cellWidth = 100 / columns;
  const cellHeight = 100 / rows;

  return selectedCells.slice(0, bubblesCount).map((cellIndex, index) => {
    const column = cellIndex % columns;
    const row = Math.floor(cellIndex / columns);

    return {
      id: index,
      left: column * cellWidth + getRandomNumber(20, 80) * (cellWidth / 100),
      size: getRandomNumber(1, 6),
      top: row * cellHeight + getRandomNumber(20, 80) * (cellHeight / 100),
    };
  });
};
