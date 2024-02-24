import "#/styles/global.css";
import { getTranslation } from "#/i18n/server";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { language } = await getTranslation();

  return (
    <html lang={language}>
      <body className="flex min-h-dvh flex-col bg-white text-neutral-800 antialiased dark:bg-black dark:text-neutral-300">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
