import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./options";
import type { Locale, LocalisationNamespace } from "./options";

const initI18next = async (lang: string, ns: LocalisationNamespace) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, ns));

  return i18nInstance;
};

export const getTranslation = async (
  lng: Locale = "en",
  ns: LocalisationNamespace = "translations"
) => {
  const i18nextInstance = await initI18next(lng, ns);

  return {
    i18n: i18nextInstance,
    // TODO: Resolve temporary type cast
    t: i18nextInstance.getFixedT(lng, ns) as (
      key: string,
      variables?: unknown
    ) => string,
  };
};
