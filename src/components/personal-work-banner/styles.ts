import styled from 'styled-components';
import { Wrap } from '~/components/wrap';
import { fromTablet } from '~/styles/breakpoints';

export const Banner = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const Container = styled(Wrap)`
  max-width: 102.4rem;
`;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
  font-size: 1.4rem;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: inherit;
  font-size: 1.4rem;
  text-decoration: inherit;
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  transition: opacity 0.2s ease;
  border-radius: 0.4rem;
`;

export const Project = styled.article`
  width: 48%;
  margin-top: 2rem;

  &:hover {
    ${ProjectImage} {
      opacity: 0.9;
    }
  }

  &:nth-child(-n + 2) {
    margin-top: 0;
  }

  @media ${fromTablet} {
    width: 24%;
    margin-top: 0;
  }
`;
