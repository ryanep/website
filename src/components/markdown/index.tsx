import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import * as styled from "./styles";
import { MarkdownProps } from "./types";

export const Strong = ({ children }: { children: ReactNode }) => (
  <styled.Strong>{children}</styled.Strong>
);

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        strong: Strong,
      }}
    >
      {source}
    </ReactMarkdown>
  );
};
