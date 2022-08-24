import { NavigationProps } from "./types";
import * as styled from "./styles";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav data-testid="navigation">
      <styled.List>
        {links &&
          links.map((link) => (
            <styled.ListItem>
              <styled.Link to={link.url}>{link.title}</styled.Link>
            </styled.ListItem>
          ))}
      </styled.List>
    </nav>
  );
};
