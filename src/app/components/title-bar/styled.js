import styled from 'styled-components';
import { darken } from 'polished';

export const TitleBar = styled.div`
  position: fixed;
  top: 6.1rem;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #8c4848;
  background-color: ${darken(0.05, '#a25656')};
  color: #ffffff;
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 500;
`;
