import "#/styles/global.css";
import { Providers } from "#/components/providers";
import { initI18n } from "./src/i18n";
import type { WrapRootElementBrowserArgs } from "gatsby";

initI18n().catch(console.error);

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  return <Providers>{element}</Providers>;
};
