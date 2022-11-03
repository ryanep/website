import { Heading } from "#/components/heading";
import { Wrap } from "#/components/wrap";
import { TitleBannerProps } from "./types";

export const TitleBanner = ({ heading }: TitleBannerProps) => {
  return (
    <div className="sticky pt-16 z-10 bg-primary text-white">
      <div className="py-3 bg-neutral-900">
        <Wrap>
          <Heading text={heading} type="h1" />
        </Wrap>
      </div>
    </div>
  );
};
