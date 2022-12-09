import { Helmet } from "react-helmet";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { RootProps } from "./types";

const navLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/contact",
    title: "Contact",
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
