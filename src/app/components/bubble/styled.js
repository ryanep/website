import styled from 'styled-components';

export const Bubble = styled.div`
  position: absolute;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  transform: ${props => props.size};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
`;
