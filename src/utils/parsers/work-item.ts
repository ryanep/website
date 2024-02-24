import { z } from "zod";
import type { WorkItemFragment } from "#/generated/sdk";

const workItemSchema = z.object({
  colour: z.string(),
  companyName: z.string(),
  description: z.string().nullable(),
  endDate: z.string().nullable(),
  icon: z.object({
    title: z.string(),
    url: z.string(),
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
    return;
  }

  return {
    colour: parsedWorkItem.data.colour,
    companyName: parsedWorkItem.data.companyName,
    description: parsedWorkItem.data.description,
    endDate: parsedWorkItem.data.endDate ?? undefined,
    icon: {
      alt: parsedWorkItem.data.icon.title,
      url: parsedWorkItem.data.icon.url,
    },
    id: parsedWorkItem.data.sys.id,
    name: parsedWorkItem.data.name,
    role: parsedWorkItem.data.role,
    startDate: parsedWorkItem.data.startDate,
  };
};
