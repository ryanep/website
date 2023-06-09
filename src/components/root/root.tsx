import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import type { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const Root = ({ children }: RootProps) => {
  return (
    <>
      <Header navLinks={navLinks} showNav={false} />

      {children}

      <Footer />
    </>
  );
};
