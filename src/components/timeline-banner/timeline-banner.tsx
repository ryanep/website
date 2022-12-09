import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "../wrap/wrap";
import type { TimelineBannerProps } from "./types";

export const TimelineBanner = ({
  heading,
  description,
  items,
}: TimelineBannerProps) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 rounded bg-neutral-300 dark:bg-neutral-400" />

          <div className="flex flex-col gap-4">
            {items.map(({ node }) => {
              const startDate = new Date(node.startDate);
              const endDate = new Date(node.endDate);
              const dateFormatter = new Intl.DateTimeFormat("en", {
                month: "short",
                year: "numeric",
              });
              const formattedStartDate = dateFormatter.format(startDate);
              const formattedEndDate = node.endDate
                ? dateFormatter.format(endDate)
                : undefined;

              return (
                <article
                  className="group relative z-10 text-left md:-mt-16 md:w-1/2 first:md:mt-0 odd:md:pr-4 even:md:ml-auto even:md:pl-4"
                  key={node.id}
                >
                  <div className="rounded-md bg-white p-4 shadow-md transition-colors dark:bg-neutral-800">
                    <header className="mb-3 flex flex-row flex-wrap items-center md:flex-nowrap">
                      <div
                        className="mr-3 flex aspect-square h-10 w-10 items-center justify-center rounded-md"
                        style={{ backgroundColor: node.colour }}
                      >
                        <img
                          alt={node.icon.title}
                          // eslint-disable-next-line tailwindcss/no-arbitrary-value
                          className="block h-auto max-h-5 w-auto max-w-[24px] opacity-80 brightness-200"
                          height="20"
                          src={node.icon.file.url}
                          width="20"
                        />
                      </div>

                      <div>
                        <h3 className="grow text-xl font-semibold">
                          {node.companyName}
                        </h3>

                        <p className="w-full shrink-0 text-xs font-medium md:w-auto">
                          {`${formattedStartDate} - ${
                            formattedEndDate ||
                            t("home:workExperienceBanner.present")
                          }`}
                        </p>
                      </div>
                    </header>

                    <p className="text-sm">{node.role}</p>

                    <div className="md:absolute md:top-1/2 md:h-3 md:w-3 md:rounded-full md:bg-neutral-400 md:group-odd:right-0 md:group-odd:translate-x-1/2 md:group-even:left-0 md:group-even:-translate-x-1/2 md:dark:bg-neutral-500" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Wrap>
    </Section>
  );
};
