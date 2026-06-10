import { getTranslation } from "#/i18n/server";
import { createGraphqlClient } from "#/utils/sdk";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { t } = await getTranslation();
  const siteUrl = t("common.siteUrl");

  const staticPages = ["/", "/blog", "/now", "/uses"].map((path) => ({
    lastModified: new Date(),
    priority: path === "/" ? 1 : 0.8,
    url: `${siteUrl}${path}`,
  }));

  let blogPostUrls: MetadataRoute.Sitemap = [];

  try {
    const sdk = createGraphqlClient();
    const response = await sdk.getBlogPostSlugs();
    const slugs = (response.blogPostCollection?.items ?? []).flatMap((item) =>
      item?.slug ? [item.slug] : []
    );

    blogPostUrls = slugs.map((slug) => ({
      lastModified: new Date(),
      priority: 0.64,
      url: `${siteUrl}/blog/${slug}`,
    }));
  } catch {
    // If Contentful is unreachable, ship without blog post URLs
  }

  return [...staticPages, ...blogPostUrls];
};

export default sitemap;
