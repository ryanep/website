import styled from 'styled-components';
import { colours } from '~/constants/colours';
import { fromTablet } from '~/styles/breakpoints';
import { Wrap } from '~/components/wrap';

export const Banner = styled.section`
  padding: 6rem 0;
  background-color: #f7f7f7;
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
  transform: translateX(-50%);
  background-color: ${colours.grey};
  width: 0.4rem;
  height: calc(100% + 4rem);
  border-radius: 0.4rem;
`;

export const Item = styled.article`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 0.3rem;
  background-color: ${colours.white};
  box-shadow: 0 0.1rem 0.2rem ${colours.grey};
  color: ${colours.doveGrey};
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
    width: 48%;

    &::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: 50%;
      transition: background-color 0.2s ease;
      border-radius: 50%;
      background-color: ${colours.silverChalice};
    }

    &:nth-child(odd) {
      &::after {
        left: calc(100% + 2rem);
        transform: translate(-50%, -50%);
      }
    }

    &:nth-child(even) {
      margin-left: auto;

      &::after {
        right: calc(100% + 2rem);
        transform: translate(50%, -50%);
      }
    }
  }
`;

export const ItemHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${fromTablet} {
    flex-wrap: nowrap;
    margin-bottom: 1rem;
  }
`;

export const ItemIcon = styled.img`
  margin-right: 1rem;
`;

export const ItemHeading = styled.h3`
  flex-grow: 1;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;

  @media ${fromTablet} {
    margin-bottom: 0;
  }
`;

export const ItemRole = styled.p`
  font-size: 1.4rem;
`;

export const ItemDate = styled.p`
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;

  @media ${fromTablet} {
    width: auto;
    margin-bottom: 0;
  }
`;
