import styled from 'styled-components';
import { Markdown } from '~/components/markdown';

export const Banner = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

export const Description = styled(Markdown)`
  font-size: 1.4rem;
  max-width: 82rem;
  margin: 0 auto;
`;
