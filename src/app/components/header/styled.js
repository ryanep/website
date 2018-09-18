import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    transform: translate(-50%, -30%);
    opacity: 0;
  }

  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const Header = styled.header`
  position: relative;
  height: ${props => (props.isBanner ? '75vh' : '6.1rem')};
  min-height: 30rem;
  max-height: 45rem;
  background-color: ${props => props.theme.colours.primary};
  color: #ffffff;
  overflow: hidden;
`;

export const Heading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 2rem;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  animation: ${animate} 0.3s ease;
  animation-delay: 3s;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: auto;
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;
