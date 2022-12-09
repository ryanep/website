import { Heading } from "#/components/heading";
import { Wrap } from "#/components/wrap";
import { TitleBannerProps } from "./types";

export const TitleBanner = ({ heading }: TitleBannerProps) => {
  return (
    <div className="sticky z-10 bg-primary pt-16 text-white">
      <div className="bg-neutral-900 py-3">
        <Wrap>
          <Heading text={heading} type="h1" />
        </Wrap>
      </div>
    </div>
  );
};
