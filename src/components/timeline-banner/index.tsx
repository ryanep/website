import React from 'react';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { TimelineBannerProps } from './types';
import * as styled from './styles';

export const TimelineBanner: React.FC<TimelineBannerProps> = React.memo(({
  heading,
  description,
  items
}) => {
  return (
    <styled.Banner>
      <styled.Container>
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <div>
          {items.map(({ node }) => {
            const sd = new Date(node.startDate);
            const ed = new Date(node.endDate);
            const dtf = new Intl.DateTimeFormat('en', {
              year: 'numeric',
              month: 'short'
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
                    {startDate} - {endDate}
                  </styled.ItemDate>
                </styled.ItemHeader>
                <styled.ItemRole>{node.role}</styled.ItemRole>
              </styled.Item>
            );
          })}
        </div>
      </styled.Container>
    </styled.Banner>
  );
});
