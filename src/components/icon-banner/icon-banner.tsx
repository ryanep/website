import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { LogoBannerProps } from "./types";

export const IconBanner = ({
  heading,
  description,
  items,
}: LogoBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <ul className="flex flex-wrap gap-5 justify-center">
          {items.map(({ node }) => (
            <li
              className="flex relative w-16 shrink-0 items-center justify-center rounded-lg aspect-square group"
              key={node.id}
              style={{ backgroundColor: node.colour }}
            >
              <img
                alt={node.icon.title}
                className="w-auto h-auto max-w-5 max-h-6"
                src={node.icon.file.url}
                width="20"
              />
              <div className="absolute invisible bottom-full left-1/2 p-1 -translate-x-1/2 group-hover:visible group-hover:opacity-100 transition-all opacity-0 bg-white text-black rounded-sm shadow-md text-sm px-2 group-hover:mb-1 dark:bg-neutral-800 dark:text-white">
                {node.name}
              </div>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
};
