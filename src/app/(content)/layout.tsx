import "#/styles/global.css";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { Wrap } from "#/components/wrap";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header isNavEnabled isWithBackground />

      <Wrap className="w-full grow py-12">{children}</Wrap>

      <Footer />
    </>
  );
};

export default RootLayout;
