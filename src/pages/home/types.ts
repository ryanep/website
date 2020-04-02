import { PageRendererProps } from 'gatsby';
import { HomeQuery } from '../../../types/graphql-types';

export type HomePageProps = PageRendererProps & {
  data: HomeQuery;
};
