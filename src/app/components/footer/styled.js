import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 2rem 0;
  background-color: ${props => props.theme.colours.primary};
  color: #ffffff;
  font-size: 1.2rem;
`;

export const Content = styled.div`
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const Copyright = styled.div`
  display: block;
  flex-grow: 1;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-grow: 1;
    text-align: left;
    margin-bottom: 0;
  }
`;

export const Icons = styled.div`
  display: inline-flex;
  margin: 0 auto;
  text-align: center;
`;
