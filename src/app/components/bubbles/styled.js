import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 192rem;
  height: 100%;
  transform: translateX(-50%);
  z-index: 3;
  pointer-events: none;
  animation: ${fade} 0.3s ease;
`;
