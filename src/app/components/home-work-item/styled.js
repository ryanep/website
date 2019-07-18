import styled from 'styled-components';

export const Work = styled.div`
  position: relative;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 30%;
    margin-left: 5%;
    margin-bottom: 0;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  transition: opacity 0.4s ease;
  will-change: opacity;

  &:hover {
    opacity: 0.9;
  }
`;

export const Link = styled.a`
  position: relative;
  display: block;
`;

export const InProgress = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  z-index: 1;
`;
