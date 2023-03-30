import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Translation/translation-en.json";
import es from "./Translation/tranlation-es.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
