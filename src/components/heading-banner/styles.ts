import styled from 'styled-components';
import { Wrap } from '#/components/wrap';
import { colours } from '#/constants/colours';

export const Banner = styled.div`
  display: flex;
  position: sticky;
  z-index: 1;
  top: calc(-40rem + 6rem);
  flex-direction: row;
  align-items: center;
  height: 40rem;
  background-color: ${colours.red};
  color: ${colours.white};
  overflow: hidden;
`;

export const Container = styled(Wrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;
