import { AboutBanner } from "#/components/about-banner";
import { BlogPostBanner } from "#/components/blog-post-banner";
import { ContactBanner } from "#/components/contact-banner";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { HeadingBanner } from "#/components/heading-banner";
import { IconBanner } from "#/components/icon-banner";
import { PersonalWorkBanner } from "#/components/personal-work-banner";
import { TimelineBanner } from "#/components/timeline-banner";
import { getTranslation } from "#/i18n/server";
import { generateBubbles } from "#/utils/bubbles";
import { parseHomePageData } from "#/utils/parsers/home";
import { parseSiteSettings } from "#/utils/parsers/site-settings";
import { createGraphqlClient } from "#/utils/sdk";

const generateMetadata = async () => {
  const { t } = await getTranslation();

  return {
    description: t("home.metaDescription"),
    title: t("home.pageTitle"),
  };
};

const getPageData = async () => {
  const sdk = createGraphqlClient();

  const [homeResponse, siteSettingsResponse] = await Promise.all([
    sdk.getHome(),
    sdk.getSiteSettings(),
  ]);

  const homePageData = parseHomePageData(homeResponse);
  const siteSettingsData = parseSiteSettings(siteSettingsResponse);

  return {
    bubbles: generateBubbles(14),
    isBlogPageEnabled: siteSettingsData.isBlogPageEnabled,
    isNowPageEnabled: siteSettingsData.isNowPageEnabled,
    ...homePageData,
  };
};

const HomePage = async () => {
  const { t } = await getTranslation();
  const { blogPosts, bubbles, isBlogPageEnabled, projects, technology, work } =
    await getPageData();

  return (
    <>
      <Header isNavEnabled />

      <main>
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

          {isBlogPageEnabled ? (
            <BlogPostBanner
              description={t("home.blogPostBanner.description")}
              heading={t("home.blogPostBanner.heading")}
              posts={blogPosts}
            />
          ) : null}

          <ContactBanner
            description={t("home.contactBanner.description")}
            heading={t("home.contactBanner.heading")}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
export { generateMetadata };
