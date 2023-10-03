import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { AboutBanner } from "#/components/about-banner";
import { ContactBanner } from "#/components/contact-banner";
import { HeadingBanner } from "#/components/heading-banner";
import { IconBanner } from "#/components/icon-banner";
import { PersonalWorkBanner } from "#/components/personal-work-banner";
import { Root } from "#/components/root";
import { TimelineBanner } from "#/components/timeline-banner";
import { parseHomePageData } from "#/utils/parsers/home";
import type { PageRendererProps } from "gatsby";

type HomePageProps = PageRendererProps & {
  readonly data: Queries.HomeQuery;
};

export const Head = () => {
  const { t } = useTranslation();

  return (
    <>
      <html lang="en" />
      <body className="bg-primary text-neutral-800 antialiased dark:bg-primary-dark" />
      <link href="//cdn.ryanep.com/favicon.ico" rel="icon" />
      <title>{t("home:pageTitle")}</title>
    </>
  );
};

export const HomePage = ({ data }: HomePageProps) => {
  const { t } = useTranslation();
  const { projects, technology, work } = parseHomePageData(data);

  return (
    <Root>
      <HeadingBanner
        description={t("home:headingBanner.description")}
        heading={t("home:headingBanner.heading")}
      />

      <AboutBanner
        description={t("home:aboutBanner.description")}
        heading={t("home:aboutBanner.heading")}
        image={{
          title: t("home:aboutBanner.imageTitle"),
          url: t("home:aboutBanner.imageUrl"),
        }}
      />

      <IconBanner
        description={t("home:iconBanner.description")}
        heading={t("home:iconBanner.heading")}
        items={technology}
      />

      <PersonalWorkBanner
        description={t("home:personalWorkBanner.description")}
        heading={t("home:personalWorkBanner.heading")}
        projects={projects}
      />

      <TimelineBanner
        description={t("home:workExperienceBanner.description")}
        heading={t("home:workExperienceBanner.heading")}
        items={work}
      />

      <ContactBanner
        description={t("home:contactBanner.description")}
        heading={t("home:contactBanner.heading")}
      />
    </Root>
  );
};

export const query = graphql`
  query Home {
    work: allContentfulWork(sort: { endDate: DESC }) {
      edges {
        node {
          id
          name
          description {
            description
          }
          companyName
          role
          startDate
          endDate
          colour
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
    projects: allContentfulProject(sort: { name: ASC }) {
      edges {
        node {
          id
          name
          description
          url
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
    technology: allContentfulTechnology(sort: { name: ASC }) {
      edges {
        node {
          id
          name
          colour
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
