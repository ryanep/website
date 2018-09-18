import styled from 'styled-components';

export const Experience = styled.section`
  padding: 4rem 0;
  background-color: #f7f7f7;
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

export const Icons = styled.ul`
  display: inline-flex;
  flex-flow: row wrap;
  max-width: 85rem;
  padding: 0;
  list-style: none;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-flow: initial;
  }
`;
