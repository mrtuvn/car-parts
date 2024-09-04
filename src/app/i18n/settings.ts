import { siteSettings } from '@settings/site-settings';

const getLanguages = () => {
  let langs = [];
  //return siteSettings.defaultLanguage;
  //TODO: check implement with list language instead return value
  if (siteSettings.languageMenu && siteSettings.languageMenu.length > 0) {
    console.log('abc getting languages from settings');
    langs = siteSettings.languageMenu.map((item) => item.value);
  }
  if (!siteSettings.languageMenu) {
    return ['vn', 'en'];
  }

  return langs;
};

export const languages = getLanguages();
export const fallbackLng = {
  en: ['en'],
  vn: ['vn'],
  default: ['vn'],
};
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
