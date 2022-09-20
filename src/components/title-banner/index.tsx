import { Heading } from "#/components/heading";
import * as styled from "./styles";
import { TitleBannerProps } from "./types";

export const TitleBanner = ({ heading }: TitleBannerProps) => {
  return (
    <styled.Banner>
      <styled.Bar>
        <styled.Container>
          <Heading text={heading} type="h1" />
        </styled.Container>
      </styled.Bar>
    </styled.Banner>
  );
};
