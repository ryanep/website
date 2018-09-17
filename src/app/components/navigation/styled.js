import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 6.1rem;
  background-color: #a25656;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: right;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
`;

export const LogoLink = styled(Link)`
  position: relative;
  padding-top: 1rem;
  color: $white;
  text-align: left;
  z-index: 3;
`;
