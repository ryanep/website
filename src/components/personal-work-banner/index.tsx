import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import * as styled from "./styles";
import { PersonalWorkBannerProps } from "./types";

export const PersonalWorkBanner = ({
  heading,
  description,
  projects,
}: PersonalWorkBannerProps) => {
  return (
    <Section>
      <styled.Container>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Projects>
          {projects.map((project) => {
            return (
              <styled.Project key={project.node.id}>
                <styled.Link
                  href={project.node.url}
                  rel="noopener"
                  target="_blank"
                >
                  <styled.ProjectImage
                    alt={project.node.image.title}
                    src={project.node.image.file.url}
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
