import { GraphQLClient } from "graphql-request";
import { AboutBanner } from "#/components/about-banner";
import { ContactBanner } from "#/components/contact-banner";
import { HeadingBanner } from "#/components/heading-banner";
import { IconBanner } from "#/components/icon-banner";
import { PersonalWorkBanner } from "#/components/personal-work-banner";
import { Root } from "#/components/root";
import { TimelineBanner } from "#/components/timeline-banner";
import { config } from "#/config";
import { getTranslation } from "#/i18n/server";
import { generateBubbles } from "#/utils/bubbles";
import { parseHomePageData } from "#/utils/parsers/home";
import { getSdk } from "#/utils/sdk";

const getPageData = async () => {
  const graphqlClient = new GraphQLClient(config.CONTENTFUL_GRAPHQL_ENDPOINT);
  const sdk = getSdk(graphqlClient);

  const response = await sdk.getHome();
  const data = parseHomePageData(response);

  return {
    bubbles: generateBubbles(14),
    ...data,
  };
};

const HomePage = async () => {
  const { t } = await getTranslation();
  const { bubbles, projects, technology, work } = await getPageData();

  return (
    <Root>
      <HeadingBanner
        bubbles={bubbles}
        description={t("home.headingBanner.description")}
        heading={t("home.headingBanner.heading")}
      />

      <div>
        <AboutBanner
          description={t("home.aboutBanner.description")}
          heading={t("home.aboutBanner.heading")}
          image={{
            title: t("home.aboutBanner.imageTitle"),
            url: t("home.aboutBanner.imageUrl"),
          }}
        />

        <IconBanner
          description={t("home.iconBanner.description")}
          heading={t("home.iconBanner.heading")}
          items={technology}
        />

        <PersonalWorkBanner
          description={t("home.personalWorkBanner.description")}
          heading={t("home.personalWorkBanner.heading")}
          projects={projects}
        />

        <TimelineBanner
          description={t("home.workExperienceBanner.description")}
          heading={t("home.workExperienceBanner.heading")}
          items={work}
        />

        <ContactBanner
          description={t("home.contactBanner.description")}
          heading={t("home.contactBanner.heading")}
        />
      </div>
    </Root>
  );
};

export default HomePage;
