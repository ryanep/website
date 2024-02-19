import type { GetHomeQuery } from "../sdk";

export const parseHomePageData = (homeData: GetHomeQuery) => {
  return {
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

    work:
      homeData.work?.items.map((work) => {
        return {
          colour: work?.colour ?? "",
          companyName: work?.companyName ?? "",
          description: work?.description ?? "",
          endDate: work?.endDate ?? "",
          icon: {
            alt: work?.icon?.title ?? "",
            url: work?.icon?.url ?? "",
          },
          id: work?.sys.id ?? "",
          name: work?.name ?? "",
          role: work?.role ?? "",
          startDate: work?.startDate ?? "",
        };
      }) ?? [],
  };
};
