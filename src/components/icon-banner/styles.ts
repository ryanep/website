import styled from 'styled-components';
import { IconStyleProps } from './types';
import { colours } from '#/constants/colours';
import { fromTablet } from '#/styles/breakpoints';

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const Icons = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: space-around;
  margin: 0 auto;

  @media ${fromTablet} {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const Icon = styled.li<IconStyleProps>`
  display: flex;
  position: relative;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4rem;
  border-radius: 1rem;
  background-color: ${({ colour }) => colour};
  aspect-ratio: 1/1;

  &::before {
    content: attr(name);
    visibility: hidden;
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    transition: all 0.3s ease;
    border-radius: 0.2rem;
    opacity: 0;
    background-color: ${colours.white};
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    color: ${colours.black};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: 1;
    will-change: opacity, visibility, transform;
  }

  &:hover {
    &::before {
      visibility: visible;
      transform: translate(-50%, -0.5rem);
      opacity: 1;
    }
  }
`;

export const IconImage = styled.img`
  max-width: 4rem;
  max-height: 3rem;
`;
