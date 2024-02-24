import { Link } from "#/components/link";

interface BlogPostCardProps {
  readonly name: string;
  readonly summary: string;
  readonly thumbnail: {
    alt: string;
    url: string;
  };
  readonly url: string;
}

export const BlogPostCard = ({
  name,
  summary,
  thumbnail,
  url,
}: BlogPostCardProps) => {
  return (
    <article>
      <Link
        className="block h-full rounded-xl bg-neutral-100 p-4 text-left shadow transition-opacity hover:opacity-90 dark:bg-neutral-900"
        to={url}
      >
        <img
          alt={thumbnail.alt}
          className="mb-4 block aspect-video w-full rounded-md object-cover"
          src={thumbnail.url}
        />

        <h3 className="mb-2 text-xl font-bold">{name}</h3>

        <p className="font-medium">{summary}</p>
      </Link>
    </article>
  );
};
