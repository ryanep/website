import { z } from "zod";
import type { GetUsesQuery } from "#/generated/sdk";

export const usesSchema = z.object({
  uses: z.object({
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

export const parseUses = (uses: GetUsesQuery | null) => {
  const parsedUses = usesSchema.safeParse(uses);

  if (!parsedUses.success) {
    console.error(parsedUses.error.issues[0]);
    throw new Error("Failed to parse uses.");
  }

  const [usesPage] = parsedUses.data.uses.items;

  return {
    content: usesPage.content,
    id: usesPage.sys.id,
    name: usesPage.name,
    publishedAt: new Date(usesPage.sys.publishedAt),
    slug: usesPage.slug,
  };
};
