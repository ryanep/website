import styled from 'styled-components';

export const Item = styled.li`
  width: 25%;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    &:nth-child(4n + 1) {
      margin-left: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 12.5%;
    margin-bottom: 0;
    margin-left: 2rem;

    &:first-child {
      margin-left: 0;
    }
  }

  &:nth-child(-n + 4) {
    margin-bottom: 1rem;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
  }
`;

export const Icon = styled.div`
  display: inline-block;
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  color: #000000;
  background-color: ${props => props.backgroundColor};

  &::before {
    position: absolute;
    left: 50%;
    padding: 0.5rem;
    transform: translate(-50%, -90%);
    transition: all 0.25s ease;
    border-radius: 2px;
    background-color: #ffffff;
    color: #000000;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    content: attr(title);
    opacity: 0;
    visibility: hidden;
    will-change: opacity, visibility, transform;
  }

  &:hover {
    &::before {
      transform: translate(-50%, -120%);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 70%;
  max-height: 2.5rem;
  transform: translate(-50%, -50%);
`;
