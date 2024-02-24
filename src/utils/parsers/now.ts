import { z } from "zod";
import type { GetNowQuery } from "#/generated/sdk";

export const nowSchema = z.object({
  now: z.object({
    items: z.array(
      z.object({
        content: z.string(),
        name: z.string(),
        slug: z.string(),
        sys: z.object({
          id: z.string(),
          publishedAt: z.string(),
        }),
      })
    ),
  }),
});

export const parseNow = (now: GetNowQuery | null) => {
  const parsedNow = nowSchema.safeParse(now);

  if (!parsedNow.success) {
    console.error(parsedNow.error.errors[0]);
    throw new Error("Failed to parse now.");
  }

  const [nowPage] = parsedNow.data.now.items;

  return {
    content: nowPage.content,
    id: nowPage.sys.id,
    name: nowPage.name,
    publishedAt: new Date(nowPage.sys.publishedAt),
    slug: nowPage.slug,
  };
};
