import { useTranslation } from 'react-i18next';
import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import { Section } from '#/components/section';
import { TimelineBannerProps } from './types';
import { Wrap } from '../wrap';
import * as styled from './styles';

export const TimelineBanner = ({
  heading,
  description,
  items,
}: TimelineBannerProps) => {
  const { t } = useTranslation();

  return (
    <Section>
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
                  <styled.ItemContent>
                    <styled.ItemHeader>
                      <styled.Icon colour={node.colour}>
                        <styled.ItemIcon
                          src={node.icon.file.url}
                          alt={node.icon.title}
                          width="20"
                          height="20"
                        />
                      </styled.Icon>

                      <div>
                        <styled.ItemHeading>
                          {node.companyName}
                        </styled.ItemHeading>
                        <styled.ItemDate>
                          {startDate} -{' '}
                          {endDate || t('home:workExperienceBanner.present')}
                        </styled.ItemDate>
                      </div>
                    </styled.ItemHeader>
                    <styled.ItemRole>{node.role}</styled.ItemRole>
                  </styled.ItemContent>
                </styled.Item>
              );
            })}
          </styled.TimelineItems>
        </styled.Timeline>
      </Wrap>
    </Section>
  );
};
