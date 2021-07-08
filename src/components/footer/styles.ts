import styled from 'styled-components';
import { colours } from '#/constants/colours';

export const Footer = styled.footer`
  padding: 2rem;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${colours.white};
  font-size: 1.2rem;
  text-align: center;
`;
