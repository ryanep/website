import { Providers } from "#/components/providers";
import { initI18n } from "./src/i18n";
import type { WrapRootElementNodeArgs } from "gatsby";

initI18n().catch(console.error);

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => {
  return <Providers>{element}</Providers>;
};
