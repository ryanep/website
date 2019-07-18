import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    top: 2rem;
    opacity: 0;
    visibility: hidden;
  }

  to {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
`;

export const TitleBarLetter = styled.span`
  position: relative;
  animation: ${animate} 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.5);
  animation-delay: ${props => props.delay}s;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;
