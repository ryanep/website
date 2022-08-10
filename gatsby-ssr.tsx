import { WrapRootElementNodeArgs } from 'gatsby';
import { initI18n } from './src/i18n';
import { Providers } from '#/components/providers';

initI18n();

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => {
  return <Providers>{element}</Providers>;
};
