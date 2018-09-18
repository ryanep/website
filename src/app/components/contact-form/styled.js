import styled from 'styled-components';

export const Contact = styled.form`
  padding: 4rem 0;
  text-align: center;
`;

export const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-bottom: 3rem;
`;

export const Sections = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    margin-bottom: 4rem;
  }
`;

export const Section = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 48%;

    &:first-child {
      margin-right: 4%;
    }
  }

  &:last-of-type {
    margin-bottom: 4rem;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
  }
`;

export const Form = styled.form`
  text-align: left;
`;

export const Buttons = styled.div`
  text-align: center;
`;
