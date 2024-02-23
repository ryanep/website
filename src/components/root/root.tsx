import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import type { ReactNode } from "react";

interface RootProps {
  readonly children: ReactNode;
}

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Now",
    url: "/now",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const Root = ({ children }: RootProps) => {
  return (
    <>
      <Header isNavEnabled={false} navLinks={navLinks} />

      {children}

      <Footer />
    </>
  );
};
