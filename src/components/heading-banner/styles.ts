import styled from 'styled-components';
import { Wrap } from '~/components/wrap';
import { colours } from '~/constants/colours';

export const Banner = styled.div`
  position: sticky;
  top: calc(-40rem + 6rem);
  height: 40rem;
  background-color: ${colours.red};
  color: ${colours.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const Container = styled(Wrap)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;
