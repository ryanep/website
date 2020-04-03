import React from 'react';
import Helmet from 'react-helmet';
import { graphql, PageRendererProps } from 'gatsby';
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
  const { work, projects, technology } = data;
  return (
    <Root>
      <Helmet title="Full-stack JavaScript Developer - Ryan Elliott-Potter" />
      <HeadingBanner
        heading="Ryan Elliott-Potter"
        description="Full-stack JavaScript Developer"
      />
      <AboutBanner
        heading="About me"
        description="I'm **Ryan Elliott-Potter**; a full-stack developer from the United Kingdom. I have a passion for all types of development but with a current focus on full stack JavaScript."
      />
      <IconBanner
        heading="Technology"
        description="I have experience in a number of different techologies. I specialise in the technologies listed below:"
        items={technology.edges}
      />
      <PersonalWorkBanner
        heading="Personal work"
        description="Below is a selection of some of my personal projects"
        projects={projects.edges}
      />
      <TimelineBanner
        heading="Work Experience"
        description="Below is a timeline of my most recent professional work experience:"
        items={work.edges}
      />
      <ContactBanner
        heading="Contact me"
        description="Feel free to contact me using the form below:"
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
