import styled from 'styled-components';
import { Wrap } from '~/components/wrap';
import { fromTablet } from '~/styles/breakpoints';

export const Banner = styled.section`
  padding: 6rem 0;
  text-align: center;
`;

export const Container = styled(Wrap)`
  max-width: 102.4rem;
`;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: space-between;

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
  margin-bottom: 1rem;
  transition: opacity 0.2s ease;
  border-radius: 0.8rem;
`;

export const Project = styled.article`
  &:hover {
    ${ProjectImage} {
      opacity: 0.9;
    }
  }
`;
