import { notFound } from "next/navigation";
import { Markdown } from "#/components/markdown";
import { getTranslation } from "#/i18n/server";
import { parseBlogPost } from "#/utils/parsers/blog-post";
import { createGraphqlClient } from "#/utils/sdk";

const getPageData = async (slug: string) => {
  const sdk = createGraphqlClient();

  const response = await sdk.getBlogPost({ slug });

  const [blogPost] = response.blogPostCollection?.items ?? [];

  if (!blogPost) {
    return notFound();
  }

  return parseBlogPost(blogPost);
};

interface BlogPostPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

const getAverageReadTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(" ").length;

  return Math.ceil(wordCount / wordsPerMinute);
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { t } = await getTranslation();
  const { content, name, publishedAt } = await getPageData(slug);

  return (
    <main className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-6xl font-black">{name}</h1>

        <p className="font-medium">
          {t("blog.header.published", {
            date: publishedAt,
            formatParams: {
              date: {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              },
            },
            interpolation: { escapeValue: false },
          })}
          -{" "}
          {t("blog.header.averageReadTime", {
            count: getAverageReadTime(content),
          })}
        </p>
      </div>

      <Markdown source={content} />
    </main>
  );
};

const generateStaticParameters = async () => {
  const sdk = createGraphqlClient();

  const response = await sdk.getBlogPostSlugs();

  if (!response.blogPostCollection?.items) {
    return [];
  }

  return response.blogPostCollection.items.filter(Boolean).map((blogPost) => {
    return {
      slug: blogPost.slug,
    };
  });
};

export default BlogPostPage;
export { generateStaticParameters as generateStaticParams };
