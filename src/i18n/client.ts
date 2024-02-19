"use client";
import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { getOptions } from "./options";
import type { Locale, LocalisationNamespace } from "./options";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init(getOptions())
  .catch((error) => {
    console.error(error);
  });

export function useTranslation(lng: Locale, ns: LocalisationNamespace) {
  return useTranslationOrg(ns);
}
