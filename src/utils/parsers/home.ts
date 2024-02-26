import { parseBlogPost } from "#/utils/parsers/blog-post";
import { parseWorkItem } from "#/utils/parsers/work-item";
import type { GetHomeQuery } from "#/generated/sdk";

export const parseHomePageData = (homeData: GetHomeQuery) => {
  const workItems = homeData.work?.items ?? [];
  const blogPosts = homeData.blogPosts?.items ?? [];

  return {
    blogPosts: blogPosts
      .map((blogPost) => parseBlogPost(blogPost))
      .filter(Boolean),

    projects:
      homeData.projects?.items.map((project) => {
        return {
          description: project?.description ?? "",
          id: project?.sys.id ?? "",
          image: {
            alt: project?.image?.title ?? "",
            url: project?.image?.url ?? "",
          },
          name: project?.name ?? "",
          url: project?.url ?? "",
        };
      }) ?? [],

    technology:
      homeData.technology?.items.map((technology) => {
        return {
          colour: technology?.colour ?? "",
          icon: {
            alt: technology?.icon?.title ?? "",
            url: technology?.icon?.url ?? "",
          },
          id: technology?.sys.id ?? "",
          name: technology?.name ?? "",
        };
      }) ?? [],

    work: workItems.map((workItem) => parseWorkItem(workItem)).filter(Boolean),
  };
};
