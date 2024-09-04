import { siteSettings } from '@settings/site-settings';

export async function getLanguages() {
  let langs = [];

  if (siteSettings.languageMenu && siteSettings.languageMenu.length > 0) {
    langs = siteSettings.languageMenu.map((item) => item.value);
  }

  return langs;
}
