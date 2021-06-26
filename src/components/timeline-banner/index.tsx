import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { TimelineBannerProps } from './types';
import { Wrap } from '../wrap';
import * as styled from './styles';

export const TimelineBanner: React.FC<TimelineBannerProps> = React.memo(
  ({ heading, description, items }) => {
    const { t } = useTranslation();

    return (
      <styled.Banner>
        <Wrap>
          <Heading type="h2" text={heading} />
          <Spacer size="medium" />

          <styled.Description>{description}</styled.Description>
          <Spacer size="large" />

          <styled.Timeline>
            <styled.Line />

            <styled.TimelineItems>
              {items.map(({ node }) => {
                const sd = new Date(node.startDate);
                const ed = new Date(node.endDate);
                const dtf = new Intl.DateTimeFormat('en', {
                  year: 'numeric',
                  month: 'short',
                });
                const startDate = dtf.format(sd);
                const endDate = node.endDate ? dtf.format(ed) : undefined;
                return (
                  <styled.Item key={node.id}>
                    <styled.ItemHeader>
                      <styled.ItemIcon
                        src={node.icon.file.url}
                        alt={node.icon.title}
                        width="20"
                        height="20"
                      />
                      <styled.ItemHeading>{node.name}</styled.ItemHeading>
                      <styled.ItemDate>
                        {startDate} -{' '}
                        {endDate
                          ? endDate
                          : t('home:workExperienceBanner.present')}
                      </styled.ItemDate>
                    </styled.ItemHeader>
                    <styled.ItemRole>{node.role}</styled.ItemRole>
                  </styled.Item>
                );
              })}
            </styled.TimelineItems>
          </styled.Timeline>
        </Wrap>
      </styled.Banner>
    );
  }
);
