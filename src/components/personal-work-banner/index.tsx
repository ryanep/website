import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Section } from "#/components/section";
import { PersonalWorkBannerProps } from "./types";
import * as styled from "./styles";

export const PersonalWorkBanner = ({
  heading,
  description,
  projects,
}: PersonalWorkBannerProps) => {
  return (
    <Section>
      <styled.Container>
        <Heading type="h2" text={heading} />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Projects>
          {projects.map((project) => {
            return (
              <styled.Project key={project.node.id}>
                <styled.Link
                  href={project.node.url}
                  target="_blank"
                  rel="noopener"
                >
                  <styled.ProjectImage
                    src={project.node.image.file.url}
                    alt={project.node.image.title}
                  />

                  <div>
                    <styled.ProjectHeading>
                      {project.node.name}
                    </styled.ProjectHeading>
                    <p>{project.node.description}</p>
                  </div>
                </styled.Link>
              </styled.Project>
            );
          })}
        </styled.Projects>
      </styled.Container>
    </Section>
  );
};
