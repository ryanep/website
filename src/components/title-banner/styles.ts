import styled from 'styled-components';
import { Wrap } from '~/components/wrap';
import { colours } from '~/constants/colours';

export const Banner = styled.div`
  position: sticky;
  z-index: 1;
  padding-top: 6rem;
  background-color: ${colours.red};
  color: ${colours.white};
`;

export const Bar = styled.div`
  padding: 1rem 0;
  background-color: ${colours.copperRust};
`;

export const Container = styled(Wrap)``;

export const Description = styled.p`
  font-size: 1.8rem;
`;
