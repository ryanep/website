import { cx } from "classix";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  readonly source: string;
}

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <div
      className={cx(
        "text-lg",
        "[&_*]:last:[&_*]:mb-0",
        "[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4",
        "[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4",
        "[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4",
        "[&_ul]:list-disc [&_ul]:pl-7 [&_ul]:mb-6",
        "[&_ol]:list-disc [&_ol]:pl-7 [&_ol]:mb-6",
        "[&_hr]:mb-6 last:[&_hr]:mb-0 [&_hr]:border-neutral-800",
        "[&_p]:mb-6",
        "[&_img]:mb-6 [&_img]:rounded-md",
        "[&_a]:underline",
        "[&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:border-neutral-400"
      )}
    >
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
};
