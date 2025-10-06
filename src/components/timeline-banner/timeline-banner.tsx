"use client";
import { cx } from "classix";
import { useState } from "react";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

interface TimelineBannerProps {
  readonly description: string;
  readonly heading: string;
  readonly items: {
    colour: string;
    companyName: string;
    endDate: string | undefined;
    icon: {
      alt: string;
      height: number;
      url: string;
      width: number;
    };
    id: string;
    name: string;
    role: string;
    startDate: string;
  }[];
}

const MAX_ITEM_COUNT = 10;

export const TimelineBanner = ({
  description,
  heading,
  items,
}: TimelineBannerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const workItems = !isExpanded ? items.slice(0, MAX_ITEM_COUNT) : items;

  const handleExpandButtonClick = () => {
    setIsExpanded(true);
  };

  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <p className="mx-auto max-w-3xl text-lg font-medium">{description}</p>
        <Spacer size="large" />

        <div
          className={cx(
            "relative",
            items.length > MAX_ITEM_COUNT && !isExpanded && "mb-8"
          )}
        >
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 rounded bg-neutral-300 dark:bg-neutral-400" />

          <div className="flex flex-col gap-4">
            {workItems.map((work) => {
              const startDate = new Date(work.startDate);
              const endDate = work.endDate ? new Date(work.endDate) : undefined;
              const dateFormatter = new Intl.DateTimeFormat("en", {
                month: "short",
                year: "numeric",
              });
              const formattedStartDate = dateFormatter.format(startDate);
              const formattedEndDate = work.endDate
                ? dateFormatter.format(endDate)
                : undefined;

              return (
                <article
                  className="group relative z-10 text-left md:-mt-16 md:w-1/2 first:md:mt-0 odd:md:pr-4 even:md:ml-auto even:md:pl-4"
                  key={work.id}
                >
                  <div className="rounded-xl bg-white p-4 shadow transition-colors dark:bg-neutral-800">
                    <header className="mb-3 flex flex-row flex-wrap items-center md:flex-nowrap">
                      <div
                        className="mr-3 flex aspect-square size-11 items-center justify-center rounded-md"
                        style={{ backgroundColor: work.colour }}
                      >
                        <Image
                          alt={work.icon.alt}
                          className="block max-h-6 max-w-[24px] opacity-80 brightness-200"
                          height={work.icon.height}
                          src={work.icon.url}
                          width={work.icon.width}
                        />
                      </div>

                      <div>
                        <h3 className="grow text-xl font-bold">
                          {work.companyName}
                        </h3>

                        <p className="w-full shrink-0 text-sm font-medium md:w-auto text-neutral-400">
                          {formattedStartDate} - {formattedEndDate ?? "Present"}
                        </p>
                      </div>
                    </header>

                    <p className="text-base font-medium leading-none">
                      {work.role}
                    </p>

                    <div className="md:absolute md:top-1/2 md:size-3 md:rounded-full md:bg-neutral-400 md:group-odd:right-0 md:group-odd:translate-x-1/2 md:group-even:left-0 md:group-even:-translate-x-1/2 md:dark:bg-neutral-500" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {!isExpanded ? (
          <Button
            onClick={handleExpandButtonClick}
            text="Show all"
            type="button"
          />
        ) : null}
      </Wrap>
    </Section>
  );
};
