import "#/styles/global.css";
import { getTranslation } from "#/i18n/server";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { t } = await getTranslation();

  return (
    <html lang="en">
      <head>
        <link href="//cdn.ryanep.com/favicon.ico" rel="icon" />
        <meta content={t("home.metaDescription")} name="description" />
      </head>

      <body className="bg-primary text-neutral-800 antialiased dark:bg-primary-dark">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
