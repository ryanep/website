import styled from 'styled-components';
import { IconStyleProps } from './types';
import { colours } from '~/constants/colours';

export const Banner = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-color: #f7f7f7;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  max-width: 82rem;
  margin: 0 auto;
`;

export const Icons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 82rem;
  margin: 0 auto;
`;

export const Icon = styled.li<IconStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ colour }) => colour};
  flex-shrink: 0;

  &::before {
    position: absolute;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    transition: all 0.25s ease;
    border-radius: 0.2rem;
    background-color: ${colours.white};
    color: ${colours.black};
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    content: attr(name);
    opacity: 0;
    visibility: hidden;
    bottom: 100%;
    will-change: opacity, visibility, transform;
  }

  &:hover {
    &::before {
      transform: translate(-50%, -0.5rem);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const IconImage = styled.img`
  max-width: 4rem;
  max-height: 3rem;
`;
