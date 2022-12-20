import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import type { LogoBannerProps } from "./types";

export const IconBanner = ({
  description,
  heading,
  items,
}: LogoBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <ul className="flex flex-wrap justify-center gap-5">
          {items.map((item) => (
            <li
              className="group relative flex aspect-square w-16 shrink-0 items-center justify-center rounded-lg"
              key={item.id}
              style={{ backgroundColor: item.colour }}
            >
              <img
                alt={item.icon.alt}
                className="h-auto max-h-6 w-auto"
                src={item.icon.url}
                width="20"
              />
              <div className="invisible absolute bottom-full left-1/2 -translate-x-1/2 rounded-sm bg-white p-1 px-2 text-sm text-black opacity-0 shadow-md transition-all group-hover:visible group-hover:mb-1 group-hover:opacity-100 dark:bg-neutral-800 dark:text-white">
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
};
