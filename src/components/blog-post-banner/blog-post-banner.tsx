import { Heading } from "#/components/heading";
import { Link } from "#/components/link";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { BlogPostCard } from "../blog-post-card";

interface BlogPostBannerProps {
  readonly description: string;
  readonly heading: string;
  readonly posts: {
    id: string;
    name: string;
    slug: string;
    summary: string;
    thumbnail: {
      alt: string;
      url: string;
    };
    url: string;
  }[];
}

export const BlogPostBanner = ({
  description,
  heading,
  posts,
}: BlogPostBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <p className="mx-auto max-w-4xl text-lg font-medium">{description}</p>
        <Spacer size="large" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              name={post.name}
              summary={post.summary}
              thumbnail={post.thumbnail}
              url={post.url}
            />
          ))}
        </div>

        <Spacer size="large" />

        <Link
          className="relative inline-block cursor-pointer rounded-full border-2 border-primary bg-transparent px-6 py-2 text-base font-bold text-primary transition-all hover:bg-primary hover:text-white disabled:text-transparent dark:border-primary-dark dark:bg-transparent dark:text-neutral-300 dark:hover:bg-primary-dark"
          to="/blog"
        >
          View all posts
        </Link>
      </Wrap>
    </Section>
  );
};
