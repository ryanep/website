import styled from 'styled-components';
import { Wrap } from '#/components/wrap';
import { fromTablet } from '#/styles/breakpoints';

export const Container = styled(Wrap)`
  max-width: 102.4rem;
`;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const ProjectHeading = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: space-between;
  text-align: left;

  @media ${fromTablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Link = styled.a`
  color: inherit;
  font-size: 1.4rem;
  text-decoration: inherit;
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  transition: opacity 0.3s ease;
  border-radius: 0.8rem;
`;

export const Project = styled.article`
  &:hover {
    ${ProjectImage} {
      opacity: 0.9;
    }
  }
`;
