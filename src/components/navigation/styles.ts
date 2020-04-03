import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { colours } from '~/constants/colours';

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin-left: 4rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const Link = styled(GatsbyLink)`
  color: ${colours.white};
  font-weight: 600;
  text-decoration: none;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;