import styled from 'styled-components';
import { colours } from '~/constants/colours';
import { fromTablet } from '~/styles/breakpoints';
import { Wrap } from '~/components/wrap';

export const Banner = styled.section`
  padding: 4rem 0;
  background-color: #f7f7f7;
  text-align: center;
`;

export const Container = styled(Wrap)`
  max-width: 82rem;
`;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
  font-size: 1.4rem;
`;

export const Item = styled.article`
  display: block;
  position: relative;
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

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0.4rem;
      height: calc(100% + 2rem);
      transform: translateY(-50%);
      background-color: ${colours.grey};
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 1rem;
      height: 1rem;
      transform: translateY(-50%);
      transition: background-color 0.2s ease;
      border-radius: 50%;
      background-color: ${colours.silverChalice};
    }

    &:nth-child(odd) {
      &::before {
        right: -1.8rem;
      }

      &::after {
        right: -2.1rem;
      }
    }

    &:nth-child(even) {
      margin-left: auto;

      &::before {
        left: -1.8rem;
      }

      &::after {
        left: -2.1rem;
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
  font-weight: 500;

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
