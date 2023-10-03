import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  readonly source: string;
}

export const Markdown = ({ source }: MarkdownProps) => {
  return <ReactMarkdown>{source}</ReactMarkdown>;
};
