import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Markdown = styled(ReactMarkdown)`
  strong {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;
