import { notFound } from "next/navigation";
import { Markdown } from "#/components/markdown";
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
  readonly params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { content, name } = await getPageData(params.slug);

  return (
    <main>
      <h1 className="mb-8 text-4xl font-black">{name}</h1>

      <div>
        <Markdown source={content} />
      </div>
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
