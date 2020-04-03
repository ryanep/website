import styled from 'styled-components';
import { Markdown } from '~/components/markdown';

export const Banner = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

export const Description = styled(Markdown)`
  max-width: 82rem;
  margin: 0 auto;
  font-size: 1.4rem;
`;
