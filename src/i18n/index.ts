// eslint-disable-next-line import/no-named-as-default
import i18n from "i18next";
import i18nXhr from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import translations from "#/locales/en/translations.json";

export const initI18n = () => {
  return i18n
    .use(i18nXhr)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV === "development",
      defaultNS: "translations",
      fallbackLng: "en",
      lng: "en",
      ns: ["translations"],
      react: {
        useSuspense: false,
      },
      resources: {
        en: translations,
      },
    });
};
