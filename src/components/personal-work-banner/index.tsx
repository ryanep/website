import React from 'react';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { PersonalWorkBannerProps } from './types';
import * as styled from './styles';

export const PersonalWorkBanner: React.FC<PersonalWorkBannerProps> = React.memo(({
  heading,
  description,
  projects
}) => {
  return (
    <styled.Banner>
      <styled.Container>
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <styled.Projects>
          {projects.map((project) => {
            return (
              <styled.Project key={project.node.id}>
                <styled.Link href={project.node.url} target="_blank" rel="noopener">
                  <styled.ProjectImage
                    src={project.node.image.file.url}
                    alt={project.node.image.title}
                  />
                  <p>{project.node.description}</p>
                </styled.Link>
              </styled.Project>
            );
          })}
        </styled.Projects>
      </styled.Container>
    </styled.Banner>
  );
});
