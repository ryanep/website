import { Helmet } from "react-helmet";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import type { RootProps } from "./types";

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
      <Helmet>
        <html lang="en" />
        <body className="bg-primary text-neutral-800 antialiased dark:bg-primary-dark" />
        <link href="//cdn.ryanep.com/favicon.ico" rel="icon" />
      </Helmet>

      <Header navLinks={navLinks} showNav={false} />

      {children}

      <Footer />
    </>
  );
};
