import React from 'react';
import Helmet from 'react-helmet';
import { graphql, PageRendererProps } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Root } from '~/components/root';
import { TimelineBanner } from '~/components/timeline-banner';
import { HeadingBanner } from '~/components/heading-banner';
import { AboutBanner } from '~/components/about-banner';
import { IconBanner } from '~/components/icon-banner';
import { PersonalWorkBanner } from '~/components/personal-work-banner';
import { ContactBanner } from '~/components/contact-banner';
import { HomeQuery } from '../../../types/graphql-types';

type HomePageProps = PageRendererProps & {
  data: HomeQuery;
};

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { work, projects, technology } = data;
  return (
    <Root>
      <Helmet title={t('home:pageTitle')} />
      <HeadingBanner
        heading={t('home:headingBanner.heading')}
        description={t('home:headingBanner.description')}
      />
      <AboutBanner
        heading={t('home:aboutBanner.heading')}
        description={t('home:aboutBanner.description')}
        image={{
          url: t('home:aboutBanner.imageUrl'),
          title: t('home:aboutBanner.imageTitle')
        }}
      />
      <IconBanner
        heading={t('home:iconBanner.heading')}
        description={t('home:iconBanner.description')}
        items={technology.edges}
      />
      <PersonalWorkBanner
        heading={t('home:personalWorkBanner.heading')}
        description={t('home:personalWorkBanner.description')}
        projects={projects.edges}
      />
      <TimelineBanner
        heading={t('home:workExperienceBanner.heading')}
        description={t('home:workExperienceBanner.description')}
        items={work.edges}
      />
      <ContactBanner
        heading={t('home:contactBanner.heading')}
        description={t('home:contactBanner.description')}
      />
    </Root>
  );
};

export const query = graphql`
  query Home {
    work: allContentfulWork(sort: { fields: endDate, order: DESC }) {
      edges {
        node {
          id
          name
          role
          startDate
          endDate
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
    projects: allContentfulProject(sort: { fields: name, order: ASC }) {
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
    technology: allContentfulTechnology(sort: { fields: name, order: ASC }) {
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
