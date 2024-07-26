import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";

interface PersonalWorkBannerProps {
  readonly description: string;
  readonly heading: string;
  readonly projects: {
    description: string;
    id: string;
    image: {
      alt: string;
      url: string;
    };
    name: string;
    url: string;
  }[];
}

export const PersonalWorkBanner = ({
  description,
  heading,
  projects,
}: PersonalWorkBannerProps) => {
  return (
    <Section>
      <Wrap className="max-w-4xl">
        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <p className="mx-auto max-w-xl text-lg font-medium">{description}</p>
        <Spacer size="large" />

        <div className="flex flex-col justify-between gap-5 text-left md:grid md:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
                className="mx-auto flex w-full items-center rounded-xl bg-neutral-100 shadow transition-opacity hover:opacity-90 dark:bg-neutral-900"
                key={project.id}
              >
                <a
                  className="flex w-full items-center gap-4 p-4"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={project.image.alt}
                    className="block aspect-square w-16 shrink-0 rounded-md"
                    height={64}
                    src={project.image.url}
                    width={64}
                  />

                  <div>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-base font-medium">
                      {project.description}
                    </p>
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
