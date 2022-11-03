import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "../wrap/wrap";
import { TimelineBannerProps } from "./types";

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
          <div className="absolute left-1/2 w-1 h-full -translate-x-1/2 rounded bg-neutral-300 dark:bg-neutral-400" />

          <div className="flex flex-col gap-4">
            {items.map(({ node }) => {
              const startDate = new Date(node.startDate);
              const endDate = new Date(node.endDate);
              const dateFormatter = new Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "short",
              });
              const formattedStartDate = dateFormatter.format(startDate);
              const formattedEndDate = node.endDate
                ? dateFormatter.format(endDate)
                : undefined;

              return (
                <article
                  className="text-left z-10 md:w-1/2 odd:md:pr-4 even:md:pl-4 even:md:ml-auto md:-mt-16 first:md:mt-0 relative group"
                  key={node.id}
                >
                  <div className="bg-white dark:bg-neutral-800 shadow-md p-4 rounded-md transition-colors">
                    <header className="flex flex-row flex-wrap items-center mb-3 md:flex-nowrap">
                      <div
                        className="flex items-center justify-center w-10 h-10 aspect-square mr-3 rounded-md"
                        style={{ backgroundColor: node.colour }}
                      >
                        <img
                          alt={node.icon.title}
                          className="block w-auto h-auto max-w-[24px] max-h-5 opacity-80 brightness-[1000] filter"
                          height="20"
                          src={node.icon.file.url}
                          width="20"
                        />
                      </div>

                      <div>
                        <h3 className="grow text-xl font-semibold">
                          {node.companyName}
                        </h3>

                        <p className="shrink-0 w-full md:w-auto text-xs font-medium">
                          {`${formattedStartDate} - ${
                            formattedEndDate ||
                            t("home:workExperienceBanner.present")
                          }`}
                        </p>
                      </div>
                    </header>

                    <p className="text-sm">{node.role}</p>

                    <div className="md:absolute md:h-3 md:w-3 md:rounded-full md:bg-neutral-400 md:dark:bg-neutral-500 md:top-1/2 md:group-even:left-0 md:group-even:-translate-x-1/2 md:group-odd:right-0 md:group-odd:translate-x-1/2" />
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
