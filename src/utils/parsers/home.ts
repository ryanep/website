export const parseHomePageData = (homeData: Queries.HomeQuery) => {
  return {
    projects: homeData.projects.edges.map((projectEdge) => {
      return {
        description: projectEdge.node.description ?? "",
        id: projectEdge.node.id,
        image: {
          alt: projectEdge.node.image?.title ?? "",
          url: projectEdge.node.image?.file?.url ?? "",
        },
        name: projectEdge.node.name ?? "",
        url: projectEdge.node.url ?? "",
      };
    }),
    technology: homeData.technology.edges.map((technologyEdge) => {
      return {
        colour: technologyEdge.node.colour ?? "",
        icon: {
          alt: technologyEdge.node.icon?.title ?? "",
          url: technologyEdge.node.icon?.file?.url ?? "",
        },
        id: technologyEdge.node.id,
        name: technologyEdge.node.name ?? "",
      };
    }),
    work: homeData.work.edges.map((workEdge) => {
      return {
        colour: workEdge.node.colour ?? "",
        companyName: workEdge.node.companyName ?? "",
        description: workEdge.node.description ?? "",
        endDate: workEdge.node.endDate ?? "",
        icon: {
          alt: workEdge.node.icon?.title ?? "",
          url: workEdge.node.icon?.file?.url ?? "",
        },
        id: workEdge.node.id,
        name: workEdge.node.name ?? "",
        role: workEdge.node.role ?? "",
        startDate: workEdge.node.startDate ?? "",
      };
    }),
  };
};
