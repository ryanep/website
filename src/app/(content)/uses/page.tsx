import { Markdown } from "#/components/markdown";
import { getTranslation } from "#/i18n/server";
import { parseUses } from "#/utils/parsers/uses";
import { createGraphqlClient } from "#/utils/sdk";

const generateMetadata = async () => {
  const { t } = await getTranslation();

  const title = t("uses.pageTitle");
  const description = t("uses.metaDescription");

  return {
    alternates: {
      canonical: "/uses",
    },
    description,
    openGraph: {
      description,
      locale: "en_GB",
      siteName: t("common.siteName"),
      title,
      type: "website",
      url: "/uses",
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

  const response = await sdk.getUses();
  const data = parseUses(response);

  return data;
};

const UsesPage = async () => {
  const { t } = await getTranslation();
  const { content, name, publishedAt } = await getPageData();

  return (
    <main id="main">
      <h1 className="mb-1 text-4xl font-black">{name}</h1>
      <div className="mb-8 font-medium">
        <Markdown
          source={t("now.lastPublished", {
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
        />
      </div>

      <div className="mb-8 max-w-3xl">
        <Markdown source={content} />
      </div>
    </main>
  );
};

export default UsesPage;
export { generateMetadata };
