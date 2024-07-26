import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

interface IconBannerProps {
  readonly description: string;
  readonly heading: string;
  readonly items: {
    colour: string;
    icon: {
      alt: string;
      height: number;
      url: string;
      width: number;
    };
    id: string;
    name: string;
  }[];
}

export const IconBanner = ({
  description,
  heading,
  items,
}: IconBannerProps) => {
  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <p className="mx-auto max-w-xl text-lg font-medium">{description}</p>
        <Spacer size="large" />

        <ul className="flex flex-wrap justify-center gap-5">
          {items.map((item) => (
            <li
              className="group relative flex aspect-square w-16 shrink-0 items-center justify-center rounded-lg"
              key={item.id}
              style={{ backgroundColor: item.colour }}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              <Image
                alt={item.icon.alt}
                className="size-auto max-h-6"
                height={item.icon.height}
                src={item.icon.url}
                width={item.icon.width}
              />
              <div className="invisible absolute bottom-full left-1/2 -translate-x-1/2 rounded-sm bg-white p-1 px-2 text-sm text-black opacity-0 shadow transition-all group-hover:visible group-hover:mb-1 group-hover:opacity-100 group-focus-visible:visible group-focus-visible:mb-1 group-focus-visible:opacity-100 dark:bg-neutral-800 dark:text-white">
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
};
