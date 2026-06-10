import { BlogPostCard } from "#/components/blog-post-card";
import { getTranslation } from "#/i18n/server";
import { parseBlog } from "#/utils/parsers/blog";
import { createGraphqlClient } from "#/utils/sdk";

const generateMetadata = async () => {
  const { t } = await getTranslation();

  const title = t("blog.pageTitle");
  const description = t("blog.metaDescription");

  return {
    alternates: {
      canonical: "/blog",
    },
    description,
    openGraph: {
      description,
      locale: "en_GB",
      siteName: t("common.siteName"),
      title,
      type: "website",
      url: "/blog",
    },
    title,
    twitter: {
      card: "summary",
      description,
      title,
    },
  };
};

const getPageData = async () => {
  const sdk = createGraphqlClient();

  const response = await sdk.getBlog();
  const data = parseBlog(response);

  return {
    blogPosts: data.blogPosts,
  };
};

export const BlogPage = async () => {
  const { blogPosts } = await getPageData();

  return (
    <main id="main">
      <h1 className="mb-8 text-4xl font-black">Blog</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogPosts.map((blogPost) => {
          return (
            <BlogPostCard
              key={blogPost.id}
              name={blogPost.name}
              summary={blogPost.summary}
              thumbnail={blogPost.thumbnail}
              url={blogPost.url}
            />
          );
        })}
      </div>
    </main>
  );
};

export default BlogPage;
export { generateMetadata };
