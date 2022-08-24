import styled from "styled-components";
import { Wrap } from "#/components/wrap";
import { fromTablet } from "#/styles/breakpoints";

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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  text-align: left;

  @media ${fromTablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: inherit;
  font-size: 1.4rem;
  text-decoration: inherit;
  padding: 1.4rem;
`;

export const ProjectImage = styled.img`
  flex-shrink: 0;
  display: block;
  width: 6rem;
  aspect-ratio: 1/1;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
`;

export const Project = styled.article`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  background-color: ${({ theme }) =>
    theme.scheme === "light"
      ? theme.colors.altBackgroundColor
      : theme.colors.highlightBackgroundColor};

  &:hover {
    ${ProjectImage} {
      opacity: 0.9;
    }
  }
`;
