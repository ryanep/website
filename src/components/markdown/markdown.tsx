import ReactMarkdown from "react-markdown";
import type { MarkdownProps } from "./types";

export const Markdown = ({ source }: MarkdownProps) => {
  return <ReactMarkdown>{source}</ReactMarkdown>;
};
