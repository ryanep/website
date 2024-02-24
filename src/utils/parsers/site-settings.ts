import { z } from "zod";
import type { GetSiteSettingsQuery } from "#/generated/sdk";

export const siteSettingsSchema = z.object({
  siteSettings: z.object({
    items: z.array(
      z.object({
        isBlogPageEnabled: z.boolean(),
        isNowPageEnabled: z.boolean(),
        sys: z.object({
          id: z.string(),
        }),
      })
    ),
  }),
});

export const parseSiteSettings = (
  siteSettings: GetSiteSettingsQuery | null
) => {
  const parsedSiteSettings = siteSettingsSchema.safeParse(siteSettings);

  if (!parsedSiteSettings.success) {
    console.error(parsedSiteSettings.error);
    throw new Error("Failed to parse site settings.");
  }

  const [settings] = parsedSiteSettings.data.siteSettings.items;

  return {
    id: settings.sys.id,
    isBlogPageEnabled: settings.isBlogPageEnabled,
    isNowPageEnabled: settings.isNowPageEnabled,
  };
};
