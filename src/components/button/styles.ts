import styled from 'styled-components';
import { colours } from '~/constants/colours';

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2.5rem;
  border: 0.2rem solid ${colours.red};
  border-radius: 10rem;
  outline: none;
  background-color: transparent;
  color: ${colours.red};
  font-size: 1.4rem;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  font-weight: 500;
  transition: all 0.25s ease, padding 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.5),
    transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.5);

  &:active {
    padding: 0.8rem 3rem;
    transform: scale(0.95);
  }

  &[disabled] {
    background-color: transparent;
    color: transparent;
  }

  &:not([disabled]) {
    &:hover {
      padding: 0.8rem 3rem;
      background-color: ${colours.red};
      color: ${colours.white};
    }
  }
`;
