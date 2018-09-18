import styled from 'styled-components';

export const Work = styled.section`
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

export const Items = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-flow: row wrap;
    max-width: 100rem;
    margin: 0 auto;
  }
`;
