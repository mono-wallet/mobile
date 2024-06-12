import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';

const locales = Localization.getLocales();
const primaryLocale = locales.length > 0 ? locales[0].languageTag : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: primaryLocale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
