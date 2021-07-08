import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import { Wrap } from '#/components/wrap';
import { Section } from '#/components/section';
import { AboutBannerProps } from './types';
import * as styled from './styles';

export const AboutBanner = ({
  heading,
  description,
  image,
}: AboutBannerProps) => {
  return (
    <Section>
      <Wrap>
        <styled.Image src={image.url} alt={image.title} />
        <Spacer size="small" />

        <Heading type="h2" text={heading} />
        <Spacer size="medium" />

        <styled.Description source={description} />
      </Wrap>
    </Section>
  );
};
