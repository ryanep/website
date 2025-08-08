import type translations from "../locales/en-GB/translations.json";

export const fallbackLng = "en-GB";
export const languages = [fallbackLng];
export const defaultNS = "translation";

export type Locale = "en-GB";

export type LocalisationNamespace = "translations";

export type TranslationKey = keyof typeof translations;

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    defaultNS,
    fallbackLng,
    fallbackNS: defaultNS,
    lng,
    ns,
    supportedLngs: languages,
  };
};
