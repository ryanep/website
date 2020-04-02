import styled from 'styled-components';
import { Wrap } from '~/components/wrap';
import { colours } from '~/constants/colours';

export const Banner = styled.div`
  position: sticky;
  padding-top: 6rem;
  background-color: ${colours.red};
  color: ${colours.white};
  z-index: 1;
`;

export const Bar = styled.div`
  background-color: ${colours.copperRust};
  padding: 1rem 0;
`;

export const Container = styled(Wrap)``;

export const Description = styled.p`
  font-size: 1.8rem;
`;
