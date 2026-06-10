import { notFound } from "next/navigation";
import { JsonLd } from "react-schemaorg";
import { Image } from "#/components/image";
import { Markdown } from "#/components/markdown";
import { getTranslation } from "#/i18n/server";
import { parseBlogPost } from "#/utils/parsers/blog-post";
import { createGraphqlClient } from "#/utils/sdk";
import { normalizeProtocolRelativeUrl } from "#/utils/url";
import type { BlogPosting, WithContext } from "schema-dts";

interface BlogPostPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { t } = await getTranslation();
  const sdk = createGraphqlClient();
  const response = await sdk.getBlogPost({ slug });

  const [blogPost] = response.blogPostCollection?.items ?? [];

  if (!blogPost) {
    return notFound();
  }

  const title = blogPost.name;
  const description = blogPost.summary ?? undefined;
  const imageUrl = normalizeProtocolRelativeUrl(blogPost.thumbnail?.url);

  return {
    alternates: {
      canonical: `/blog/${slug}`,
    },
    description,
    openGraph: {
      description,
      images: imageUrl
        ? [{ alt: blogPost.thumbnail?.title ?? title, url: imageUrl }]
        : undefined,
      locale: "en_GB",
      siteName: t("common.siteName"),
      title,
      type: "article",
      url: `/blog/${slug}`,
    },
    title,
    twitter: {
      card: "summary",
      description,
      images: imageUrl ? [{ alt: title, url: imageUrl }] : undefined,
      title,
    },
  };
};

const getPageData = async (slug: string) => {
  const sdk = createGraphqlClient();

  const response = await sdk.getBlogPost({ slug });

  const [blogPost] = response.blogPostCollection?.items ?? [];

  if (!blogPost) {
    return notFound();
  }

  return parseBlogPost(blogPost);
};

const getAverageReadTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(" ").length;

  return Math.ceil(wordCount / wordsPerMinute);
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { t } = await getTranslation();
  const { content, name, publishDate, thumbnail } = await getPageData(slug);

  const siteUrl = t("common.siteUrl");
  const postUrl = `${siteUrl}/blog/${slug}`;
  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "author": {
      "@type": "Person",
      "name": t("home.headingBanner.heading"),
      "url": siteUrl,
    },
    "datePublished": publishDate.toISOString(),
    "description": t("blog.metaDescription"),
    "headline": name,
    "image": thumbnail.url,
    "url": postUrl,
  };

  return (
    <main className="mx-auto max-w-3xl" id="main">
      <JsonLd<BlogPosting> item={jsonLd} />
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-6xl font-black">{name}</h1>

        <p className="font-medium">
          {t("blog.header.published", {
            date: publishDate,
            formatParams: {
              date: {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              },
            },
            interpolation: { escapeValue: false },
          })}{" "}
          -{" "}
          {t("blog.header.averageReadTime", {
            count: getAverageReadTime(content),
          })}
        </p>
      </div>

      <Image
        alt={thumbnail.alt}
        className="mb-12 block aspect-video w-full rounded-md object-cover lg:scale-105"
        height={320}
        src={thumbnail.url}
        width={320}
      />

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
export { generateMetadata };
