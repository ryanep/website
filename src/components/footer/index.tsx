import { useTranslation } from 'react-i18next';
import { Wrap } from '#/components/wrap';
import * as styled from './styles';
import { getCurrentYear } from '#/utils/date';

export const Footer = () => {
  const { t } = useTranslation();
  const year = getCurrentYear();
  return (
    <styled.Footer>
      <Wrap>{t('footer:copyright', { year })}</Wrap>
    </styled.Footer>
  );
};
