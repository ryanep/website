import "#/styles/global.css";
import { WrapRootElementBrowserArgs } from "gatsby";
import { Providers } from "#/components/providers/providers";
import { initI18n } from "./src/i18n";

initI18n();

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  return <Providers>{element}</Providers>;
};
