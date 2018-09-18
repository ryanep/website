import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const About = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const Photo = styled.img`
  width: 12rem;
  margin-bottom: 2rem;
  border-radius: 50%;
`;

export const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Markdown = styled(ReactMarkdown)`
  max-width: 82rem;
  margin: 0 auto;
`;
