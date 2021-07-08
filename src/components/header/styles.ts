import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { Wrap } from '#/components/wrap';

export const Header = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
`;

export const Container = styled(Wrap)`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Logo = styled(GatsbyLink)`
  margin-right: auto;
`;

export const DarkModeToggle = styled.button`
  cursor: pointer;
`;
