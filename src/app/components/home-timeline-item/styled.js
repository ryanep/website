import styled from 'styled-components';

export const Link = styled.div`
  display: block;
  position: relative;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 3px;
  background-color: #ffffff;
  color: #666666;
  text-align: left;
  text-decoration: none;
  box-shadow: 0 1px 2px #cccccc;

  &::after {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0.4rem;
    height: 2rem;
    transform: translateX(-50%);
    background-color: #cccccc;
    content: '';
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(50% - 2rem);

    &::before {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.1);
      width: 0.4rem;
      height: calc(100% + 2rem);
      top: -1rem;
      right: -2rem;
      content: '';
      transform: translateX(50%);
    }

    &::after {
      position: absolute;
      top: 50%;
      right: -2rem;
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      background-color: #999999;
      border-radius: 50%;
      transform: translate(50%, -50%);
    }

    &:nth-child(even) {
      &::before {
        right: initial;
        left: -2rem;
        transform: translateX(-50%);
      }

      &::after {
        right: initial;
        left: -2rem;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:nth-child(even) {
    margin-left: auto;
  }

  &:first-child {
    &::before {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }

  &:last-child {
    margin-bottom: 0;

    &::after {
      content: none;

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        content: '';
      }
    }

    &::before {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`;

export const Icon = styled.img`
  margin-right: 1rem;
  width: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Company = styled.div`
  flex-grow: 1;
  font-size: 2rem;
  font-weight: 500;
`;

export const Time = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
