import * as styled from "./styles";
import { NavigationProps } from "./types";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav data-testid="navigation">
      <styled.List>
        {links &&
          links.map((link) => (
            <styled.ListItem key={link.url}>
              <styled.Link to={link.url}>{link.title}</styled.Link>
            </styled.ListItem>
          ))}
      </styled.List>
    </nav>
  );
};
