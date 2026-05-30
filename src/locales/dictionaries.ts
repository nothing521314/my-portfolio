import { vi } from "./vi";
import { en } from "./en";
import { Translation, Locale } from "./types";

const dictionaries: Record<Locale, Translation> = {
  vi,
  en,
};

export const locales: Locale[] = ["vi", "en"];
export const defaultLocale: Locale = "vi";

export const getDictionary = (locale: string): Translation => {
  return dictionaries[locale as Locale] || dictionaries[defaultLocale];
};

export const hasLocale = (locale: string): locale is Locale => {
  return locale in dictionaries;
};
