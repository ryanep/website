import './src/i18n';
import { Providers } from './src/components/providers';

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
