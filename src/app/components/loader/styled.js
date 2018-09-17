import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  transform: translate(-50%, -50%);
  transform-origin: center;
  border: 0.3rem solid $red;
  border-radius: 50%;
  border-top-color: transparent;
  content: '';
  animation: ${spinner} 0.6s linear infinite;
`;

export const Hide = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;
