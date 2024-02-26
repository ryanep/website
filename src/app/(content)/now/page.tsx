import { Markdown } from "#/components/markdown";
import { getTranslation } from "#/i18n/server";
import { parseNow } from "#/utils/parsers/now";
import { createGraphqlClient } from "#/utils/sdk";

const generateMetadata = async () => {
  const { t } = await getTranslation();

  return {
    description: t("now.metaDescription"),
    title: t("now.pageTitle"),
  };
};

const getPageData = async () => {
  const sdk = createGraphqlClient();

  const response = await sdk.getNow();
  const data = parseNow(response);

  return data;
};

const NowPage = async () => {
  const { t } = await getTranslation();
  const { content, name, publishedAt } = await getPageData();

  return (
    <main>
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

export default NowPage;
export { generateMetadata };
