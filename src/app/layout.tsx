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
          className="absolute -left-full top-4 z-50 rounded-md bg-primary px-4 py-2 text-white no-underline focus:left-4"
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
