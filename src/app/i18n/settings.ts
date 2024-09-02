import { siteSettings } from "@settings/site-settings";


function getLanguages() {
  let langs = [];
  return siteSettings.defaultLanguage;
  //TODO: check implement with list language instead return value
  if (siteSettings.languageMenu && siteSettings.languageMenu.length > 0) {
    langs = siteSettings.languageMenu.map(item => item.value);
  }

  return langs;
}


export const languages = getLanguages();
export const fallbackLng = `${siteSettings.defaultLanguage} ?? 'en'`;
export const defaultNS = 'common';
export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    debug: process.env.NODE_ENV === 'production' ? false : true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
