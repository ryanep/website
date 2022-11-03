import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { PersonalWorkBannerProps } from "./types";

export const PersonalWorkBanner = ({
  heading,
  description,
  projects,
}: PersonalWorkBannerProps) => {
  return (
    <Section>
      <Wrap className="max-w-4xl">
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <div className="flex flex-col gap-5 justify-between text-left md:grid md:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
                className="flex items-center rounded-md w-full mx-auto shadow-md bg-neutral-100 dark:bg-neutral-900 hover:opacity-90 transition-colors"
                key={project.node.id}
              >
                <a
                  className="flex items-center gap-3 p-4 w-full"
                  href={project.node.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt={project.node.image.title}
                    className="shrink-0 block w-16 aspect-square rounded-xl"
                    src={project.node.image.file.url}
                  />

                  <div>
                    <h3 className="font-bold text-xl mb-1">
                      {project.node.name}
                    </h3>
                    <p className="text-sm">{project.node.description}</p>
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
