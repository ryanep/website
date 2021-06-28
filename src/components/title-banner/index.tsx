import { Heading } from '#/components/heading';
import { TitleBannerProps } from './types';
import * as styled from './styles';

export const TitleBanner = ({ heading }: TitleBannerProps) => {
  return (
    <styled.Banner>
      <styled.Bar>
        <styled.Container>
          <Heading type="h1" text={heading} />
        </styled.Container>
      </styled.Bar>
    </styled.Banner>
  );
};
