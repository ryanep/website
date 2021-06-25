import styled from 'styled-components';
import { IconStyleProps } from './types';
import { colours } from '~/constants/colours';

export const Banner = styled.section`
  padding: 4rem 0;
  background-color: #f7f7f7;
  text-align: center;
`;

export const Description = styled.p`
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
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  /* border-radius: 50%; */
  border-radius: 0.8rem;
  background-color: ${({ colour }) => colour};

  &::before {
    content: attr(name);
    visibility: hidden;
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    transition: all 0.25s ease;
    border-radius: 0.2rem;
    opacity: 0;
    background-color: ${colours.white};
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    color: ${colours.black};
    font-size: 1.4rem;
    font-weight: normal;
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
