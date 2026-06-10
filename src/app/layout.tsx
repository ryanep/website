import "#/styles/global.css";
import { getTranslation } from "#/i18n/server";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#3b82f6", media: "(prefers-color-scheme: light)" },
    { color: "#1e293b", media: "(prefers-color-scheme: dark)" },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await getTranslation();

  return {
    description: t("home.metaDescription"),
    metadataBase: new URL(t("common.siteUrl")),
    title: {
      default: t("home.pageTitle"),
      template: "%s - Ryan Elliott-Potter",
    },
  };
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { language } = await getTranslation();

  return (
    <html lang={language}>
      <body className="flex min-h-dvh flex-col bg-white text-neutral-700 antialiased dark:bg-black dark:text-neutral-300">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:no-underline"
          href="#main"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
