import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import type { PersonalWorkBannerProps } from "./types";

export const PersonalWorkBanner = ({
  description,
  heading,
  projects,
}: PersonalWorkBannerProps) => {
  return (
    <Section>
      <Wrap className="max-w-4xl">
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <div className="flex flex-col justify-between gap-5 text-left md:grid md:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
                className="mx-auto flex w-full items-center rounded-md bg-neutral-100 shadow-md transition-colors hover:opacity-90 dark:bg-neutral-900"
                key={project.id}
              >
                <a
                  className="flex w-full items-center gap-3 p-4"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt={project.image.alt}
                    className="block aspect-square w-16 shrink-0 rounded-xl"
                    src={project.image.url}
                  />

                  <div>
                    <h3 className="mb-1 text-xl font-bold">{project.name}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </Wrap>
    </Section>
  );
};