import { Helmet } from "react-helmet";
import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import * as styled from "./styles";
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
    <div>
      <Helmet>
        <html lang="en" />
        <link href="//cdn.ryanep.com/favicon.ico" rel="icon" />
      </Helmet>
      <styled.Global />
      <Header navLinks={navLinks} showNav={false} />
      {children}
      <Footer />
    </div>
  );
};
