import { Feed } from "feed";
import { getTranslation } from "#/i18n/server";
import { parseBlog } from "#/utils/parsers/blog";
import { createGraphqlClient } from "#/utils/sdk";

const getPageData = async () => {
  const sdk = createGraphqlClient();

  const response = await sdk.getBlog();
  const data = parseBlog(response);

  return {
    blogPosts: data.blogPosts,
  };
};

export const GET = async () => {
  const { t } = await getTranslation();
  const { blogPosts } = await getPageData();

  const feed = new Feed({
    copyright: t("rss.feed.copyright"),
    description: t("rss.feed.description"),
    id: t("rss.feed.id"),
    language: t("rss.feed.language"),
    link: t("rss.feed.link"),
    title: t("rss.feed.title"),
  });

  for (const blogPost of blogPosts) {
    feed.addItem({
      date: blogPost.publishedAt,
      description: blogPost.summary,
      link: `https://www.ryanep.com/blog/${blogPost.slug}`,
      title: blogPost.name,
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
