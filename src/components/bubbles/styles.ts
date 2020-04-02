import styled from 'styled-components';
import { BubbleStyleProps } from './types';

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

export const Bubble = styled.div<BubbleStyleProps>`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  width: 1rem;
  height: 1rem;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  transform: ${({ size }) => `scale(${size})`};
`;
