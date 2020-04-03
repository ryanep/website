import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrap } from '~/components/wrap';
import { FooterProps } from './types';
import * as styled from './styles';
import { getCurrentYear } from '~/utils/date';

export const Footer: React.FC<FooterProps> = React.memo(() => {
  const { t } = useTranslation();
  const year = getCurrentYear();
  return (
    <styled.Footer>
      <Wrap>{t('footer:copyright', { year })}</Wrap>
    </styled.Footer>
  );
});
