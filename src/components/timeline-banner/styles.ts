import styled from 'styled-components';
import { colours } from '#/constants/colours';
import { fromTablet } from '#/styles/breakpoints';
import { Wrap } from '#/components/wrap';
import { IconStyleProps } from './types';

export const Banner = styled.section`
  padding: 6rem 0;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.altBackgroundColor};
  text-align: center;
`;

export const Container = styled(Wrap)``;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const Timeline = styled.div`
  position: relative;
`;

export const TimelineItems = styled.div``;

export const Line = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  width: 0.4rem;
  height: calc(100% + 4rem);
  transform: translateX(-50%);
  border-radius: 0.4rem;
  background-color: ${colours.grey};
`;

export const Item = styled.article`
  display: block;
  position: relative;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.highlightColor};
  text-align: left;
  text-decoration: none;

  &:hover {
    &::after {
      background-color: ${colours.doveGrey};
    }
  }

  &:first-child {
    margin-top: 0;
  }

  @media ${fromTablet} {
    width: 50%;
    margin-top: -4.5rem;
    margin-bottom: 0;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 1rem;
      height: 1rem;
      transition: background-color 0.2s;
      border-radius: 50%;
      background-color: ${colours.silverChalice};
    }

    &:nth-child(odd) {
      padding-right: 2rem;

      &::after {
        left: 100%;
        transform: translate(-50%, -50%);
      }
    }

    &:nth-child(even) {
      margin-left: auto;
      padding-left: 2rem;

      &::after {
        right: 100%;
        transform: translate(50%, -50%);
      }
    }
  }
`;

export const ItemContent = styled.div`
  background-color: ${({ theme }) => theme.colors.highlightBackgroundColor};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  padding: 1.5rem;
  border-radius: 0.3rem;
`;

export const ItemHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;

  @media ${fromTablet} {
    flex-wrap: nowrap;
  }
`;

export const Icon = styled.div<IconStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ colour }) => `${colour}`};
`;

export const ItemIcon = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 2.4rem;
  max-height: 2rem;

  filter: brightness(100);
  opacity: 80%;
`;

export const ItemHeading = styled.h3`
  flex-grow: 1;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const ItemRole = styled.p`
  font-size: 1.4rem;
`;

export const ItemDate = styled.p`
  flex-shrink: 0;
  width: 100%;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media ${fromTablet} {
    width: auto;
  }
`;
