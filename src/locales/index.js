import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./eng";
import ua from "./ua";


export default i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: eng,
        ua: ua
    },
    lng: "en", 
    fallbackLng: "en",
    en: eng,
    interpolation: {
    }
  })