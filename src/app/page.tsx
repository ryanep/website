import { JsonLd } from "react-schemaorg";
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
import { normalizeProtocolRelativeUrl } from "#/utils/url";
import type { Person, WithContext } from "schema-dts";

const generateMetadata = async () => {
  const { t } = await getTranslation();

  const title = t("home.pageTitle");
  const description = t("home.metaDescription");
  const imageUrl = normalizeProtocolRelativeUrl(t("home.aboutBanner.imageUrl"));

  return {
    alternates: {
      canonical: "/",
    },
    description,
    openGraph: {
      description,
      images: [{ alt: title, url: imageUrl }],
      locale: "en_GB",
      siteName: t("common.siteName"),
      title,
      type: "website",
      url: "/",
    },
    title,
    twitter: {
      card: "summary",
      description,
      images: [{ alt: title, url: imageUrl }],
      title,
    },
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

  const imageUrl = normalizeProtocolRelativeUrl(t("home.aboutBanner.imageUrl"));

  const siteUrl = t("common.siteUrl");

  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "description": t("home.metaDescription"),
    "image": imageUrl,
    "jobTitle": t("home.headingBanner.description"),
    "name": t("home.headingBanner.heading"),
    "sameAs": ["https://github.com/ryanep", "https://linkedin.com/in/ryanep"],
    "url": siteUrl,
  };

  return (
    <>
      <JsonLd<Person> item={jsonLd} />
      <main id="main">
        <div className="relative">
          <div className="absolute z-10 w-full">
            <Header isNavEnabled />
          </div>

          <HeadingBanner
            bubbles={bubbles}
            description={t("home.headingBanner.description")}
            heading={t("home.headingBanner.heading")}
          />
        </div>

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
            expandButtonText={t("common.showAll")}
            heading={t("home.workExperienceBanner.heading")}
            items={work}
          />

          {isBlogPageEnabled ? (
            <BlogPostBanner
              description={t("home.blogPostBanner.description")}
              heading={t("home.blogPostBanner.heading")}
              posts={blogPosts}
              viewAllText={t("common.viewAllPosts")}
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
