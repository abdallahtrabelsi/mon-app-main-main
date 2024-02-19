import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./components/locales/en/translation.json";
import translationFR from "./components/locales/fr/translation.json";
import translationAR from "./components/locales/ar/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    },
    ar: {
        translation: translationAR
    }
};

i18n

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });
export default i18n;