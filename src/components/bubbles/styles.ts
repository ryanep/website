import styled from 'styled-components';
import { BubbleStyleProps } from './types';

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const Bubble = styled.div<BubbleStyleProps>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 1rem;
  height: 1rem;
  transform: ${({ size }) => `scale(${size}) `};
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
`;
