import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  source: string;
}

export const Markdown = ({ source }: MarkdownProps) => {
  return <ReactMarkdown>{source}</ReactMarkdown>;
};
