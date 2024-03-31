import { z } from "zod";
import type { WorkItemFragment } from "#/generated/sdk";

const workItemSchema = z.object({
  colour: z.string(),
  companyName: z.string(),
  description: z.string().nullable(),
  endDate: z.string().nullable(),
  icon: z.object({
    height: z.number(),
    title: z.string(),
    url: z.string(),
    width: z.number(),
  }),
  name: z.string(),
  role: z.string(),
  startDate: z.string(),
  sys: z.object({
    id: z.string(),
  }),
});

export const parseWorkItem = (workItem: null | WorkItemFragment) => {
  const parsedWorkItem = workItemSchema.safeParse(workItem);

  if (!parsedWorkItem.success) {
    console.error(parsedWorkItem.error);
    throw new Error("Failed to parse work item.");
  }

  return {
    colour: parsedWorkItem.data.colour,
    companyName: parsedWorkItem.data.companyName,
    description: parsedWorkItem.data.description,
    endDate: parsedWorkItem.data.endDate ?? undefined,
    icon: {
      alt: parsedWorkItem.data.icon.title,
      height: parsedWorkItem.data.icon.height,
      url: parsedWorkItem.data.icon.url,
      width: parsedWorkItem.data.icon.width,
    },
    id: parsedWorkItem.data.sys.id,
    name: parsedWorkItem.data.name,
    role: parsedWorkItem.data.role,
    startDate: parsedWorkItem.data.startDate,
  };
};
