import styled from 'styled-components';
import { IconStyleProps } from './types';
import { colours } from '#/constants/colours';

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const Icons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Icon = styled.li<IconStyleProps>`
  display: flex;
  position: relative;
  width: 7rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
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
    line-height: 1.2;
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
  width: auto;
  height: auto;
  max-width: 2.4rem;
  max-height: 3rem;
`;
