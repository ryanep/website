import { WrapRootElementNodeArgs } from "gatsby";
import { Providers } from "#/components/providers/providers";
import { initI18n } from "./src/i18n";

initI18n();

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => {
  return <Providers>{element}</Providers>;
};
